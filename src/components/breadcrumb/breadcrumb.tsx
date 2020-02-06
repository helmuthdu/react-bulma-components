import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type BreadcrumbProps = ElementModifier & {
  align?: 'right' | 'center';
  hrefAttr?: string;
  items?: {
    active?: boolean;
    name?: React.ReactNode;
    url: string;
  }[];
  as?: 'a' | ((...args: any[]) => any);
  separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
  size?: Sizes;
} & Omit<React.ComponentProps<'a'>, 'ref' | 'unselectable'>;

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ className, items, as, hrefAttr, separator, size, align, ...props }, ref) => (
    <nav
      ref={ref}
      className={clsx('breadcrumb', className, modifiers.getClassName(props), {
        [`has-${separator}-separator`]: separator,
        [`is-${size}`]: size,
        [`is-${align}`]: align
      })}
      {...modifiers.clean(props)}
    >
      <ul>
        {items &&
          items.map((item: any) => (
            <li
              key={item.url}
              className={clsx({
                'is-active': item.active
              })}
            >
              <Element as={as}>{item.name}</Element>
            </li>
          ))}
      </ul>
    </nav>
  )
);

Breadcrumb.defaultProps = {
  ...modifiers.defaultProps,
  hrefAttr: 'href',
  items: [],
  as: 'a'
};
