import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarDropdownProps = Omit<React.ComponentPropsWithRef<'span'>, 'unselectable'> &
  ElementModifier & {
    boxed?: boolean;
    right?: boolean;
  };

export const NavbarDropdown = React.forwardRef<HTMLSpanElement, NavbarDropdownProps>(
  ({ className, boxed, right, children, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        'navbar-dropdown',
        {
          'is-boxed': boxed,
          'is-right': right
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

NavbarDropdown.defaultProps = {
  ...modifiers.defaultProps,
  boxed: false,
  as: 'span',
  right: false
};

NavbarDropdown.displayName = 'NavbarDropdown';
