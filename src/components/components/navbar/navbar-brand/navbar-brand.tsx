import cn from 'classnames';
import * as React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type NavbarBrandProps = Partial<Modifiers>;

export const NavbarBrand: React.FunctionComponent<NavbarBrandProps> = ({
  className,
  children,
  ...props
}: NavbarBrandProps) => (
  <Element {...props} className={cn('navbar-brand', className)}>
    {children}
  </Element>
);

NavbarBrand.defaultProps = {
  ...modifiers.defaultProps
};
