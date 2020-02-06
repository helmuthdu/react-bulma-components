import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type ModalContentProps = ElementModifier;

export const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, ...props }, ref) => (
    <Element ref={ref} {...props} className={clsx('modal-content', className)}>
      {children}
    </Element>
  )
);

ModalContent.defaultProps = {
  ...modifiers.defaultProps
};
