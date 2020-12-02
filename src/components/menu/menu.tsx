import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type MenuProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({ className, ...props }, ref) => (
  <Element ref={ref} className={clsx('menu', className)} {...props} />
));

Menu.defaultProps = {
  ...modifiers.defaultProps,
  as: 'aside'
};

Menu.displayName = 'Menu';
