import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type CardHeaderIconProps = Omit<React.ComponentPropsWithRef<'a'>, 'unselectable'> & ElementModifier;

export const CardHeaderIcon = React.forwardRef<HTMLAnchorElement, CardHeaderIconProps>(
  ({ className, ...props }, ref) => <Element ref={ref} className={clsx('card-header-icon', className)} {...props} />
);

CardHeaderIcon.defaultProps = {
  ...modifiers.defaultProps,
  as: 'a'
};

CardHeaderIcon.displayName = 'CardHeaderIcon';
