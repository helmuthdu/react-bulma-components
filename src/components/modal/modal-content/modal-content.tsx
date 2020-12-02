import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type ModalContentProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const ModalContent = React.forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, className, ...props }, ref) => (
    <Element ref={ref} className={clsx('modal-content', className)} {...props}>
      {children}
    </Element>
  )
);

ModalContent.defaultProps = {
  ...modifiers.defaultProps
};

ModalContent.displayName = 'ModalContent';
