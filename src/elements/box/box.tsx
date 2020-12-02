import clsx from 'clsx';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type BoxProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} className={clsx('box', className)} {...props}>
    {children}
  </Element>
));

Box.defaultProps = {
  ...modifiers.defaultProps
};

Box.displayName = 'Box';
