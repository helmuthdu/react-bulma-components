import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarItemProps = ElementModifier & {
  active?: boolean;
  dropdown?: boolean;
  dropdownUp?: boolean;
  hoverable?: boolean;
} & Omit<React.ComponentProps<'a'>, 'ref' | 'unselectable'>;

export const NavbarItem = React.forwardRef<HTMLAnchorElement, NavbarItemProps>(
  ({ className, active, children, dropdown, dropdownUp, hoverable, as, ...props }, ref) => {
    return (
      <Element
        as={dropdown && as === 'a' ? 'span' : as}
        className={clsx('navbar-item', className, {
          'has-dropdown': dropdown,
          'has-dropdown-up': dropdownUp,
          'is-active': active,
          'is-hoverable': hoverable
        })}
        {...props}
      >
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
