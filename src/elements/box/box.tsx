import clsx from 'clsx';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type BoxProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(({ children, paddingless, className, ...props }, ref) => (
  <Element
    ref={ref}
    {...modifiers.clean(props)}
    className={clsx('box', className, modifiers.getClassName(props), {
      'is-paddingless': paddingless
    })}>
    {children}
  </Element>
));

Box.defaultProps = {
  ...modifiers.defaultProps
};
