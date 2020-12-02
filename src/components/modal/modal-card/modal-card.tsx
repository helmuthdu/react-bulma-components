import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type ModalCardProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const ModalCard = React.forwardRef<HTMLDivElement, ModalCardProps>(({ className, children, ...props }, ref) => (
  <Element ref={ref} className={clsx('modal-card', className)} {...props}>
    {children}
  </Element>
));

ModalCard.defaultProps = {
  ...modifiers.defaultProps
};

ModalCard.displayName = 'ModalCard';
