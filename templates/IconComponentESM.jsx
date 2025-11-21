import React, { Suspense, lazy } from 'react';
import toPascalCase from 'to-pascal-case';

<%_ components.forEach(({ name, path }) => { _%>
<%- `const _${name} = lazy(() => import('${path}/index.esm.js'));` %>
<%- `export { _${name} as ${name} };` %>
<% }); %>

	function getModule(name) {
		switch (name) {
<%_ components.forEach(({ name }) => { _%>
    <%- `case '${name}':` %>
      <%- `return _${name};` %>
<% }); %>

    default:
		return;
	}
}

export const iconNames = [
  <%_ components.forEach(({ name, path }, i) => { _%>
  <%- `'${name}'${i < components.length - 1 ? ',' : ''}` %>
  <% }); %>
]

function renderFallback(props) {
	const { width = 24, height = 24 } = props;
	const fallbackProps = {
		...props,
		width,
		height,
		style: {
			...props.style,
			display: 'inline-block',
			borderRadius: 100,
			backgroundColor: '#e7e7e7',
			width: `${width}px`,
			height: `${height}px`,
			verticalAlign: 'middle'
		}
	};

	return <span {...fallbackProps} />;
}

export default function Icon(props) {
	const defaultFallback = renderFallback(props);
	const {
		icon,
		placeholder = defaultFallback
	} = props;

	const IconComponent = getModule(toPascalCase(icon));

	return (
		<Suspense fallback={placeholder}>
			{IconComponent && <IconComponent {...props} /> || placeholder}
		</Suspense>
	);
}

