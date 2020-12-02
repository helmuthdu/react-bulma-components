import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type ModalCardTitleProps = Omit<React.ComponentPropsWithRef<'span'>, 'unselectable'> & ElementModifier;

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

ModalCardTitle.displayName = 'ModalCardTitle';
