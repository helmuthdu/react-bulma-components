import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../elements';

type NavbarBrandProps = Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> & ElementModifier;

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
