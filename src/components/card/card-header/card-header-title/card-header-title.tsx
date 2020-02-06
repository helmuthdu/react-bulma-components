import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type CardHeaderTitleProps = ElementModifier;

export const CardHeaderTitle = React.forwardRef<HTMLDivElement, CardHeaderTitleProps>(
  ({ className, ...props }, ref) => <Element ref={ref} {...props} className={clsx('card-header-title', className)} />
);

CardHeaderTitle.defaultProps = {
  ...modifiers.defaultProps
};
