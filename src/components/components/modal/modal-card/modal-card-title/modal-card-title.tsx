import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../modifiers';
import { Element } from '../../../../elements';

type ModalCardTitleProps = Partial<Modifiers>;

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
  renderAs: 'p'
};
