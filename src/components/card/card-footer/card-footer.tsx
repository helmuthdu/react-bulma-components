import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type CardFooterProps = Omit<React.ComponentPropsWithRef<'footer'>, 'unselectable'> & ElementModifier;

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({ className, ...props }, ref) => (
  <Element ref={ref} className={clsx('card-footer', className)} {...props} />
));

CardFooter.defaultProps = {
  ...modifiers.defaultProps,
  as: 'footer'
};

CardFooter.displayName = 'CardFooter';
