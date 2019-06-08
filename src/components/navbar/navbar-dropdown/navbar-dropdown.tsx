import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

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
    className={cn('navbar-dropdown', className, {
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
