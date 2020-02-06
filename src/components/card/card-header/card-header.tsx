import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type CardHeaderProps = ElementModifier;

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => (
  <Element ref={ref} {...props} className={clsx('card-header', className)} />
));

CardHeader.defaultProps = {
  ...modifiers.defaultProps
};
