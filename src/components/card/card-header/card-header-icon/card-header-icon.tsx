import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type CardHeaderIconProps = ElementModifier;

export const CardHeaderIcon = React.forwardRef<HTMLDivElement, CardHeaderIconProps>(({ className, ...props }, ref) => (
  <Element ref={ref} {...props} className={clsx('card-header-icon', className)} />
));

CardHeaderIcon.defaultProps = {
  ...modifiers.defaultProps
};
