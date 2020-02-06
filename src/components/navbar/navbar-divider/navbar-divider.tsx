import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarDividerProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const NavbarDivider = React.forwardRef<HTMLHRElement, NavbarDividerProps>(({ className, ...props }, ref) => (
  <Element ref={ref} className={clsx('navbar-divider', className)} {...props} />
));

NavbarDivider.defaultProps = {
  ...modifiers.defaultProps
};
