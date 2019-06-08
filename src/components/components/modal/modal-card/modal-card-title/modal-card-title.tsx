import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../../../modifiers';
import { Element } from '../../../../elements';

type ModalCardTitleProps = ElementModifier & Omit<React.ComponentProps<'span'>, 'unselectable'>;

export const ModalCardTitle: React.FunctionComponent<ModalCardTitleProps> = ({
  children,
  className,
  ...props
}: ModalCardTitleProps) => (
  <Element className={cn('modal-card-title', className)} {...props}>
    {children}
  </Element>
);

ModalCardTitle.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'span'
};
