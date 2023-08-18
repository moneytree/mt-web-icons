/// <reference types="react" />
import { SVGAttributes, ReactNode } from 'react';
interface ICoreProps {
  icon: string;
  placeholder?: ReactNode;
}
declare type IIconComponentProps = SVGAttributes<SVGElement> & ICoreProps;
<% components.forEach(({ name }) => { %>
<%- `export function ${name}(props: SVGAttributes<SVGElement>): ReactNode;` -%>
<% }); %>
export default function IconComponent(props: IIconComponentProps): ReactNode;
