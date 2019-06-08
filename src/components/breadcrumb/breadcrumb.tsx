import cn from 'classnames';
import * as React from 'react';
import { Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';

type BreadcrumbProps = ElementModifier & {
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
} & Omit<React.ComponentProps<'a'>, 'unselectable'>;

export const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = ({
  className,
  items,
  renderAs,
  hrefAttr,
  separator,
  size,
  align,
  ...rest
}: BreadcrumbProps) => {
  const props = modifiers.clean(rest);
  return (
    <nav
      className={cn('breadcrumb', className, modifiers.getClassName(rest), {
        [`has-${separator}-separator`]: separator,
        [`is-${size}`]: size,
        [`is-${align}`]: align
      })}
      {...props}
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
