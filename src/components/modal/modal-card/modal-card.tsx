import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type ModalCardProps = ElementModifier & {
  onClose?: (...args: any[]) => any;
} & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const ModalCard: React.FunctionComponent<ModalCardProps> = ({
  className,
  onClose,
  children,
  ...props
}: ModalCardProps) => (
  <Element className={clsx('modal-card', className)} {...props}>
    {children}
  </Element>
);

ModalCard.defaultProps = {
  ...modifiers.defaultProps
};
