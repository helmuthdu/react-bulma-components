import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type BreadcrumbProps = Omit<React.ComponentPropsWithRef<'a'>, 'unselectable'> &
  ElementModifier & {
    align?: 'right' | 'center';
    hrefAttr?: string;
    items?: {
      active?: boolean;
      name?: React.ReactNode;
      url: string;
    }[];
    separator?: 'arrow' | 'bullet' | 'dot' | 'succeeds';
    size?: Sizes;
  };

export const Breadcrumb = React.forwardRef<HTMLAnchorElement, BreadcrumbProps>(
  ({ className, items, as, hrefAttr, separator, size, align, ...props }, ref) => (
    <nav
      ref={ref}
      className={clsx(
        'breadcrumb',
        {
          [`has-${separator}-separator`]: separator,
          [`is-${size}`]: size,
          [`is-${align}`]: align
        },
        modifiers.getClassName(props),
        className
      )}
      {...modifiers.clean(props)}>
      <ul>
        {items &&
          items.map((item: any) => (
            <li
              key={item.url}
              className={clsx({
                'is-active': item.active
              })}>
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

Breadcrumb.displayName = 'Breadcrumb';
