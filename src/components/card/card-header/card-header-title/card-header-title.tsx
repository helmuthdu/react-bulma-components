import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type CardHeaderTitleProps = Omit<React.ComponentPropsWithRef<'p'>, 'unselectable'> &
  ElementModifier & { centered?: boolean };

export const CardHeaderTitle = React.forwardRef<HTMLParagraphElement, CardHeaderTitleProps>(
  ({ centered, className, ...props }, ref) => (
    <Element ref={ref} className={clsx('card-header-title', { 'is-centered': centered }, className)} {...props} />
  )
);

CardHeaderTitle.defaultProps = {
  ...modifiers.defaultProps,
  as: 'p'
};

CardHeaderTitle.displayName = 'CardHeaderTitle';
