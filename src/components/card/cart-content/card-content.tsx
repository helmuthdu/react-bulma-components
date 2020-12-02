import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type CardContentProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => (
  <Element ref={ref} className={clsx('card-content', className)} {...props} />
));

CardContent.defaultProps = {
  ...modifiers.defaultProps
};

CardContent.displayName = 'CardContent';
