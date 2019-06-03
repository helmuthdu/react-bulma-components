import cn from 'classnames';
import * as React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type NavbarDropdownProps = Partial<Modifiers> & {
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
  renderAs: 'span',
  right: false
};
