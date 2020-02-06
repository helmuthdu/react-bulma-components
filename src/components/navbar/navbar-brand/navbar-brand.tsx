import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarBrandProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const NavbarBrand = React.forwardRef<HTMLDivElement, NavbarBrandProps>(
  ({ className, children, ...props }, ref) => (
    <Element ref={ref} className={clsx('navbar-brand', className)} {...props}>
      {children}
    </Element>
  )
);

NavbarBrand.defaultProps = {
  ...modifiers.defaultProps
};
