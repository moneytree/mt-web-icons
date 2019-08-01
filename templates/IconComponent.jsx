import React from 'react';
import toPascalCase from 'to-pascal-case';

const { Suspense, lazy } = React;

<%_ components.forEach(({ name, path }) => { _%>
<%- `const _${name} = lazy(() => import('${path}'));` %>
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

function renderFallback(props) {
  const { width = 20, height = 20 } = props;
  const fallbackProps = {
    ...props,
    width,
    height,
    style: {
      ...props.style,
      display: 'inline-block',
      borderRadius: 100,
      backgroundColor: '#000',
      width: `${width}px`,
      height: `${height}px`,
      'vertical-align': 'middle'
    }
  };

  return <div {...fallbackProps} />;
}

export default function Icon(props) {
  const {
    name,
    fallback = null,
    placeholder = renderFallback(props)
  } = props;

  const IconComponent = getModule(toPascalCase(name));

  return (
    <Suspense fallback={fallback}>
      {IconComponent && <IconComponent {...props} /> || placeholder}
    </Suspense>
  );
}
