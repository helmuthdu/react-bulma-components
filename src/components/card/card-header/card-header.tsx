import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type CardHeaderProps = Omit<React.ComponentPropsWithRef<'header'>, 'unselectable'> & ElementModifier;

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => (
  <Element ref={ref} className={clsx('card-header', className)} {...props} />
));

CardHeader.defaultProps = {
  ...modifiers.defaultProps,
  as: 'header'
};

CardHeader.displayName = 'CardHeader';
