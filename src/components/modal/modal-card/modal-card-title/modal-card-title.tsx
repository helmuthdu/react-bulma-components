import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type ModalCardTitleProps = ElementModifier & Omit<React.ComponentProps<'span'>, 'ref' | 'unselectable'>;

export const ModalCardTitle = React.forwardRef<HTMLSpanElement, ModalCardTitleProps>(
  ({ children, className, ...props }, ref) => (
    <Element ref={ref} className={clsx('modal-card-title', className)} {...props}>
      {children}
    </Element>
  )
);

ModalCardTitle.defaultProps = {
  ...modifiers.defaultProps,
  as: 'span'
};
