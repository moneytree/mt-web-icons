module.exports = toPascalCase;

// These are copied from the `to-pascal-case` implementation
// https://github.com/ianstormtaylor/to-pascal-case/blob/master/index.js
// And the chain of (3!) imports it uses

const separatorSplitter = /[\W_]+(.|$)/g;

function unseparate(string) {
  return string.replace(separatorSplitter, (_, next) => {
    return next ? " " + next : "";
  });
}

const camelSplitter = /(.)([A-Z]+)/g;

function uncamelize(string) {
  return string.replace(camelSplitter, (_, previous, uppers) => {
    return previous + " " + uppers.toLowerCase().split("").join(" ");
  });
}

const hasSpace = /\s/;
const hasSeparator = /(_|-|\.|:)/;
const hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase();
  if (hasSeparator.test(string))
    return (unseparate(string) || string).toLowerCase();
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase();
  return string.toLowerCase();
}

function toSpaceCase(string) {
  return toNoCase(string)
    .replace(/[\W_]+(.|$)/g, (_, match) => {
      return match ? " " + match : "";
    })
    .trim();
}

function toPascalCase(string) {
  return toSpaceCase(string).replace(/(?:^|\s)(\w)/g, (_, letter) => {
    return letter.toUpperCase();
  });
}
