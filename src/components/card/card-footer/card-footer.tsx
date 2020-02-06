import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type CardFooterProps = ElementModifier;

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({ className, ...props }, ref) => (
  <Element ref={ref} {...props} className={clsx('card-footer', className)} />
));

CardFooter.defaultProps = {
  ...modifiers.defaultProps
};
