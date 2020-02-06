import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type CardContentProps = ElementModifier;

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => (
  <Element ref={ref} {...props} className={clsx('card-content', className)} />
));

CardContent.defaultProps = {
  ...modifiers.defaultProps
};
