import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type CardFooterItemProps = ElementModifier;

export const CardFooterItem = React.forwardRef<HTMLDivElement, CardFooterItemProps>(({ className, ...props }, ref) => (
  <Element ref={ref} {...props} className={clsx('card-footer-item', className)} />
));

CardFooterItem.defaultProps = {
  ...modifiers.defaultProps
};
