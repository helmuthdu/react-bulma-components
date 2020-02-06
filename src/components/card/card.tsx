import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type CardProps = ElementModifier;

export const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => (
  <Element ref={ref} className={clsx('card', className, modifiers.getClassName(props))} {...modifiers.clean(props)}>
    {children}
  </Element>
));

Card.defaultProps = {
  ...modifiers.defaultProps
};
