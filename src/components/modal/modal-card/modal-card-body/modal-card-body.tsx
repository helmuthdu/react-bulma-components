import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type ModalCardBodyProps = ElementModifier;

export const ModalCardBody = React.forwardRef<HTMLDivElement, ModalCardBodyProps>(
  ({ children, className, ...props }, ref) => (
    <Element ref={ref} {...props} className={clsx('modal-card-body', className)}>
      {children}
    </Element>
  )
);

ModalCardBody.defaultProps = {
  ...modifiers.defaultProps,
  as: 'section'
};
