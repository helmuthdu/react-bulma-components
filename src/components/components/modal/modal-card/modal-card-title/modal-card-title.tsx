import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../../../modifiers';
import { Element } from '../../../../elements';

type ModalCardTitleProps = Partial<Omit<React.ComponentProps<'span'>, 'unselectable'>> & ElementModifier;

export const ModalCardTitle: React.FunctionComponent<ModalCardTitleProps> = ({
  children,
  className,
  ...props
}: ModalCardTitleProps) => (
  <Element {...props} className={cn('modal-card-title', className)}>
    {children}
  </Element>
);

ModalCardTitle.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'span'
};
