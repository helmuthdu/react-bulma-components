import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type CardFooterItemProps = Omit<React.ComponentPropsWithRef<'a'>, 'unselectable'> & ElementModifier;

export const CardFooterItem = React.forwardRef<HTMLAnchorElement, CardFooterItemProps>(
  ({ className, ...props }, ref) => <Element ref={ref} className={clsx('card-footer-item', className)} {...props} />
);

CardFooterItem.defaultProps = {
  ...modifiers.defaultProps,
  as: 'a'
};

CardFooterItem.displayName = 'CardFooterItem';
