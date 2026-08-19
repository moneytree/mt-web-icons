const fs = require("node:fs");
const fsPromises = require("node:fs/promises");
const path = require("path");
const { optimize } = require("svgo");
const { transform } = require("@svgr/core");
const babel = require("@babel/core");
const ejs = require("ejs");
const toPascalCase = require("../lib/toPascalCase");

const FOLDER = {
  SVGS: path.resolve(__dirname, "../svgs"),
  REACT: path.resolve(__dirname, "../react"),
  ICOMOON: path.resolve(__dirname, "../icomoon"),
  TEMPLATES: path.resolve(__dirname, "../templates"),
  LIB: path.resolve(__dirname, "../lib"),
};

const BABEL_SETTINGS = {
  minified: true,
  plugins: [
    "@babel/plugin-transform-react-jsx",
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-proposal-export-default-from",
  ],
  presets: ["@babel/react"],
};

// Template for our component
function reactComponentTemplate({ componentName, jsx }, { tpl }) {
  return tpl`
  import React from 'react';
  export default function ${componentName}(props) { return ${jsx} }
`;
}

// Loads JSON definition of our icons
const icomoonJsonDefinition = require(
  path.join(FOLDER.ICOMOON, "selection.json"),
).icons;

// Removes svgs and components directories in case some icons are not available anymore
fs.rmSync(FOLDER.SVGS, { recursive: true, force: true });
fs.rmSync(FOLDER.REACT, { recursive: true, force: true });

fs.mkdirSync(FOLDER.SVGS);
fs.mkdirSync(FOLDER.REACT);

icomoonJsonDefinition.forEach(
  async ({
    properties: { name },
    icon: { paths, width = 1024, height = 1024 },
  }) => {
    // Creates the SVG source code
    const pathStrings = paths.map((path) => `<path fill="#000" d="${path}"/>`);
    const dataSource = `
    <svg version="1.1"
         xmlns="http://www.w3.org/2000/svg"
         viewBox="0 0 ${width} ${height}"
    >
      ${pathStrings.join("")}
    </svg>`.replace(/^\s+|\s+$/gm, "");

    try {
      const { data } = optimize(dataSource, {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
          },
        ],
      });

      // Creates and saves the SVGs
      const svgFilename = `${name.replace(new RegExp(/[-_]+/, "g"), "-")}.svg`;
      const svgPath = path.join(FOLDER.SVGS, svgFilename);
      await fsPromises.mkdir(path.dirname(svgPath), { recursive: true });
      fsPromises.writeFile(svgPath, data);

      // Creates Typescript Components
      const componentName = toPascalCase(name);
      const componentPath = path.join(FOLDER.REACT, componentName);

      // Creates `react` folder where to save our components
      fs.mkdirSync(componentPath);

      // Creates the React component from the SVG source.
      let svgComponent = await transform(
        data,
        {
          icon: true,
          plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx"],
          template: reactComponentTemplate,
        },
        { componentName },
      );
      // SVGR produces an SVG with width="1em" and height="1em"
      // The regex replaces width="1em" with width="100%" and height="1em" with height="100%"
      svgComponent = svgComponent.replace(
        /<svg(.*?)((?:width|height)="(.*?)")(.*?)((?:width|height)="(.*?)")(.*?)>/gim,
        '<svg$1width="100%"$4height="100%"$7>',
      );

      // Transpiles JSX into JS with Babel
      const result = await babel.transformAsync(svgComponent, {
        ...BABEL_SETTINGS,
        presets: [...BABEL_SETTINGS.presets, ["@babel/preset-env"]],
      });

      fsPromises.writeFile(path.join(componentPath, "index.js"), result.code);

      // Generates type definitions for the single react components
      const typeDefinition = await ejs.renderFile(
        path.join(FOLDER.TEMPLATES, "reactComponentTypeDefinition.d.ts"),
        {
          componentName,
        },
      );
      fsPromises.writeFile(
        path.join(componentPath, "index.d.ts"),
        typeDefinition,
      );
    } catch (err) {
      console.error(err);
    }
  },
);

async function generateIconComponent() {
  const iconComponentFolder = path.join(FOLDER.REACT, "Icon");

  const componentStatements = icomoonJsonDefinition.map(
    ({ properties: { name } }) => {
      const componentName = toPascalCase(name);
      const componentPath = path.join(FOLDER.REACT, componentName);
      return {
        name: componentName,
        path: path.relative(
          path.join(iconComponentFolder, "cjs"),
          componentPath,
        ),
      };
    },
  );

  // Generates the IconComponent source
  const iconComponentTemplate = await ejs.renderFile(
    path.join(FOLDER.TEMPLATES, "IconComponent.jsx"),
    {
      components: componentStatements,
    },
    { rmWhitespace: true },
  );
  // Traspiles `IconComponent` JSX => JS with Babel
  const iconComponentSourceESM = await babel.transformAsync(
    iconComponentTemplate,
    BABEL_SETTINGS,
  );
  await fsPromises.mkdir(path.join(iconComponentFolder, "esm"), {
    recursive: true,
  });
  fsPromises.writeFile(
    path.join(iconComponentFolder, "esm", "index.js"),
    iconComponentSourceESM.code,
  );

  const iconComponentSourceCJS = await babel.transformAsync(
    iconComponentTemplate,
    {
      ...BABEL_SETTINGS,
      presets: [...BABEL_SETTINGS.presets, ["@babel/preset-env"]],
    },
  );
  await fsPromises.mkdir(path.join(iconComponentFolder, "cjs"), {
    recursive: true,
  });
  fsPromises.writeFile(
    path.join(iconComponentFolder, "cjs", "index.js"),
    iconComponentSourceCJS.code,
  );

  // Generates type definitions for the `IconComponent`
  const typeDefinition = await ejs.renderFile(
    path.join(FOLDER.TEMPLATES, "IconComponentTypeDefinition.d.ts"),
    {
      components: componentStatements,
    },
  );
  fsPromises.writeFile(
    path.join(iconComponentFolder, "cjs", "index.d.ts"),
    typeDefinition,
  );
  fsPromises.writeFile(
    path.join(iconComponentFolder, "esm", "index.d.ts"),
    typeDefinition,
  );
  fs.cpSync(
    path.join(FOLDER.LIB, "toPascalCase.js"),
    path.join(iconComponentFolder, "cjs", "toPascalCase.js"),
  );
  fs.cpSync(
    path.join(FOLDER.LIB, "toPascalCase.js"),
    path.join(iconComponentFolder, "esm", "toPascalCase.js"),
  );
}

generateIconComponent();
