import clsx from 'clsx';
import * as React from 'react';
import { Button, Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type ModalCardHeadProps = ElementModifier & {
  onClose?: () => void;
} & Omit<React.ComponentProps<'header'>, 'ref' | 'unselectable'>;

export const ModalCardHeader = React.forwardRef<HTMLDivElement, ModalCardHeadProps>(
  ({ children, className, onClose, ...props }, ref) => (
    <Element ref={ref} className={clsx('modal-card-head', className)} {...props}>
      {children}
      {onClose && <Button remove onClick={onClose} />}
    </Element>
  )
);

ModalCardHeader.defaultProps = {
  ...modifiers.defaultProps,
  as: 'header'
};
