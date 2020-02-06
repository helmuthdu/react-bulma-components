import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type MenuProps = ElementModifier;

export const Menu = React.forwardRef<HTMLDivElement, MenuProps>(({ className, ...props }, ref) => (
  <Element ref={ref} {...props} className={clsx('menu', className)} />
));

Menu.defaultProps = {
  ...modifiers.defaultProps,
  as: 'aside'
};
