import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarDropdownProps = ElementModifier & {
  boxed?: boolean;
  right?: boolean;
};

export const NavbarDropdown: React.FunctionComponent<NavbarDropdownProps> = ({
  className,
  boxed,
  right,
  children,
  ...props
}: NavbarDropdownProps) => (
  <Element
    {...props}
    className={clsx('navbar-dropdown', className, {
      'is-boxed': boxed,
      'is-right': right
    })}
  >
    {children}
  </Element>
);

NavbarDropdown.defaultProps = {
  ...modifiers.defaultProps,
  boxed: false,
  as: 'span',
  right: false
};
