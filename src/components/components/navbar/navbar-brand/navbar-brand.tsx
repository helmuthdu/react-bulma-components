import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../elements';

type NavbarBrandProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const NavbarBrand: React.FunctionComponent<NavbarBrandProps> = ({
  className,
  children,
  ...props
}: NavbarBrandProps) => (
  <Element className={cn('navbar-brand', className)} {...props}>
    {children}
  </Element>
);

NavbarBrand.defaultProps = {
  ...modifiers.defaultProps
};
