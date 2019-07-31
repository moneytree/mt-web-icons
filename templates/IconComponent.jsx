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

export default function Icon(props) {
  const {
    name,
    width = 24,
    height = 24,
    fallback = null,
    placeholder= <div style={{ borderRadius: 100, backgroundColor: '#000', width: `${width}px`, height: `${height}px` }} />
  } = props;

  const IconComponent = getModule(toPascalCase(name));

  return (
    <Suspense fallback={fallback}>
      {IconComponent && <IconComponent {...props} /> || placeholder}
    </Suspense>
  );
}
