import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarItemProps = Omit<React.ComponentPropsWithRef<'a'>, 'unselectable'> &
  ElementModifier & {
    active?: boolean;
    dropdown?: boolean;
    dropdownUp?: boolean;
    hoverable?: boolean;
  };

export const NavbarItem = React.forwardRef<HTMLAnchorElement, NavbarItemProps>(
  ({ className, active, children, dropdown, dropdownUp, hoverable, as, ...props }, ref) => {
    return (
      <Element
        ref={ref}
        as={dropdown && as === 'a' ? 'span' : as}
        className={clsx(
          'navbar-item',
          {
            'has-dropdown': dropdown,
            'has-dropdown-up': dropdownUp,
            'is-active': active,
            'is-hoverable': hoverable
          },
          className
        )}
        {...props}>
        {children}
      </Element>
    );
  }
);

NavbarItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  dropdown: false,
  dropdownUp: false,
  hoverable: false,
  as: 'a'
};

NavbarItem.displayName = 'NavbarItem';
