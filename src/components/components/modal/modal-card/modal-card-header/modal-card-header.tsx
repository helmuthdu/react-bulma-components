import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../../../modifiers';
import { Button, Element } from '../../../../elements';

type ModalCardHeadProps = Partial<Omit<React.ComponentProps<'header'>, 'unselectable'>> &
  ElementModifier & {
    onClose?: () => void;
  };

export const ModalCardHeader: React.FunctionComponent<ModalCardHeadProps> = ({
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

ModalCardHeader.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'header'
};
