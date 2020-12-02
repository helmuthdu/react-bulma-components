import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { MenuList } from '../menu-list';

type MenuListItemProps = Omit<React.ComponentPropsWithRef<'a'>, 'unselectable'> &
  ElementModifier & {
    active?: boolean;
  };

export const MenuListItem = React.forwardRef<HTMLAnchorElement, MenuListItemProps>(
  ({ children, active, className, ...props }, ref) => {
    if (
      children &&
      typeof children !== 'string' &&
      React.Children.toArray(children).length === 1 &&
      (React.Children.only(children) as any).type === MenuList
    ) {
      const child: any = React.Children.only(children);
      return (
        <li>
          <Element ref={ref} className={clsx(className, { 'is-active': active })} {...props}>
            {child.props.title}
          </Element>
          {React.cloneElement(child, { title: null })}
        </li>
      );
    }
    return (
      <li>
        <Element ref={ref} className={clsx(className, { 'is-active': active })} {...props}>
          {children}
        </Element>
      </li>
    );
  }
);

MenuListItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  as: 'a'
};

MenuListItem.displayName = 'MenuListItem';
