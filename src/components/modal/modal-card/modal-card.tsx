import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type ModalCardProps = ElementModifier & {
  onClose?: (...args: any[]) => any;
} & Omit<React.ComponentProps<'div'>, 'ref' | 'onClose' | 'unselectable'>;

export const ModalCard = React.forwardRef<HTMLDivElement, ModalCardProps>(
  ({ className, onClose, children, ...props }, ref) => (
    <Element ref={ref} className={clsx('modal-card', className)} {...props}>
      {children}
    </Element>
  )
);

ModalCard.defaultProps = {
  ...modifiers.defaultProps
};
