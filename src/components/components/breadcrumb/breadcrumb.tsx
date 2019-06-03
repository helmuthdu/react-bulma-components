import cn from 'classnames';
import React from 'react';
import modifiers from '../../../modifiers';
import { HelpersModifier } from '../../../modifiers/helpers';

type BreadcrumbProps = Partial<Modifiers> & {
  align?: 'right' | 'center';
  className?: string;
  hrefAttr?: string;
  items?: {
    active?: boolean;
    name?: React.ReactNode;
    url: string;
  }[];
  renderAs?: 'a' | ((...args: any[]) => any);
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
  size?: any;
  style?: object;
};
export const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  className,
  items,
  renderAs,
  hrefAttr,
  separator,
  size,
  align,
  ...allProps
}: any) => {
  const Element = renderAs;
  const props = modifiers.clean(allProps);
  return (
    <nav
      {...props}
      className={cn('breadcrumb', className, modifiers.getClassName(allProps), {
        [`has-${separator}-separator`]: separator,
        [`is-${size}`]: size,
        [`is-${align}`]: align
      })}
    >
      <ul>
        {items.map((item: any) => {
          const p = {
            [renderAs === 'a' ? 'href' : hrefAttr]: item.url
          };
          return (
            <li
              key={item.url}
              className={cn({
                'is-active': item.active
              })}
            >
              <Element {...p}>{item.name}</Element>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
Breadcrumb.defaultProps = {
  ...modifiers.defaultProps,
  hrefAttr: 'href',
  items: [],
  renderAs: 'a'
};
