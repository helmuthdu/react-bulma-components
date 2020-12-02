import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarDividerProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const NavbarDivider = React.forwardRef<HTMLHRElement, NavbarDividerProps>(({ className, ...props }, ref) => (
  <Element ref={ref} className={clsx('navbar-divider', className)} {...props} />
));

NavbarDivider.defaultProps = {
  ...modifiers.defaultProps
};

NavbarDivider.displayName = 'NavbarDivider';
