/// <reference types="react" />
import { SVGAttributes, ReactElement, ReactNode } from 'react';
interface ICoreProps {
  icon: string;
  fallback?: ReactNode;
  placeholder?: ReactNode;
}
declare type IIconComponentProps = SVGAttributes<SVGElement> & ICoreProps;
<% components.forEach(({ name }) => { %>
<%- `export function ${name}(props: SVGAttributes<SVGElement>): ReactElement;` -%>
<% }); %>
export default function IconComponent(props: IIconComponentProps): ReactElement;
