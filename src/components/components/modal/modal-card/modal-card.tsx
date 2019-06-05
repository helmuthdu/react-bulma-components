import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type ModalCardProps = Partial<Modifiers> & {
  onClose?: (...args: any[]) => any;
};

export const ModalCard: React.FunctionComponent<ModalCardProps> = ({
  className,
  onClose,
  children,
  ...props
}: ModalCardProps) => (
  <Element {...props} className={cn('modal-card', className)}>
    {children}
  </Element>
);

ModalCard.defaultProps = {
  ...modifiers.defaultProps
};
