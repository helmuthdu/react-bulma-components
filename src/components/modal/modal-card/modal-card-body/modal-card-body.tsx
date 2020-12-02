import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type ModalCardBodyProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const ModalCardBody = React.forwardRef<HTMLDivElement, ModalCardBodyProps>(
  ({ children, className, ...props }, ref) => (
    <Element ref={ref} className={clsx('modal-card-body', className)} {...props}>
      {children}
    </Element>
  )
);

ModalCardBody.defaultProps = {
  ...modifiers.defaultProps,
  as: 'section'
};

ModalCardBody.displayName = 'ModalCardBody';
