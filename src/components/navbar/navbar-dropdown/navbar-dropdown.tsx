import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarDropdownProps = ElementModifier & {
  boxed?: boolean;
  right?: boolean;
};

export const NavbarDropdown = React.forwardRef<HTMLSpanElement, NavbarDropdownProps>(
  ({ className, boxed, right, children, ...props }, ref) => (
    <Element
      ref={ref}
      {...props}
      className={clsx('navbar-dropdown', className, {
        'is-boxed': boxed,
        'is-right': right
      })}>
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
