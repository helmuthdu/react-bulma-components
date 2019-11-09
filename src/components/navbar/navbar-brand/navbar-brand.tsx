import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarBrandProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const NavbarBrand: React.FunctionComponent<NavbarBrandProps> = ({
  className,
  children,
  ...props
}: NavbarBrandProps) => (
  <Element className={clsx('navbar-brand', className)} {...props}>
    {children}
  </Element>
);

NavbarBrand.defaultProps = {
  ...modifiers.defaultProps
};
