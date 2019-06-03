import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../modifiers';
import { Element } from '../../../../elements';
import { ModalCardBody, ModalCardFoot, ModalCardHead, ModalCardTitle } from './components';

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

(ModalCard as any).Body = ModalCardBody;
(ModalCard as any).Foot = ModalCardFoot;
(ModalCard as any).Head = ModalCardHead;
(ModalCard as any).Title = ModalCardTitle;

ModalCard.defaultProps = {
  ...modifiers.defaultProps
};
