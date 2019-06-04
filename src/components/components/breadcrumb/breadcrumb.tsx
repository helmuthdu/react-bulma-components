import cn from 'classnames';
import React from 'react';
import { Sizes } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

type BreadcrumbProps = Partial<Modifiers> & {
  align?: 'right' | 'center';
  hrefAttr?: string;
  items?: {
    active?: boolean;
    name?: React.ReactNode;
    url: string;
  }[];
  renderAs?: 'a' | ((...args: any[]) => any);
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
  size?: Sizes;
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
}: BreadcrumbProps) => {
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
        {items &&
          items.map((item: any) => {
            return (
              <li
                key={item.url}
                className={cn({
                  'is-active': item.active
                })}
              >
                <Element renderAs={renderAs}>{item.name}</Element>
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
