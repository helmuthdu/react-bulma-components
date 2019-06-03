import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../../modifiers';
import { Button, Element } from '../../../../../elements';

type ModalCardHeadProps = Partial<Modifiers> & {
  onClose?: (...args: any[]) => any;
};

export const ModalCardHead: React.FunctionComponent<ModalCardHeadProps> = ({
  children,
  className,
  onClose,
  ...props
}: ModalCardHeadProps) => (
  <Element {...props} className={cn('modal-card-head', className)}>
    {children}
    {onClose && <Button data-testid="modal-card-close-button" remove onClick={onClose} />}
  </Element>
);

ModalCardHead.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'header'
};
