import clsx from 'clsx';
import * as React from 'react';
import { JSXElementConstructor } from 'react';
import modifiers, { ElementModifier } from '../../modifiers';

type ElementProps = ElementModifier & React.ComponentProps<JSXElementConstructor<any>>;

export const Element = React.forwardRef<HTMLElement, ElementProps>(({ className, as: Component, ...props }, ref) => (
  <Component
    ref={ref}
    className={clsx(className, modifiers.getClassName(props)) || undefined}
    {...modifiers.clean(props)}
  />
));

Element.defaultProps = {
  ...modifiers.defaultProps,
  as: 'div'
};

Element.displayName = 'Element';
