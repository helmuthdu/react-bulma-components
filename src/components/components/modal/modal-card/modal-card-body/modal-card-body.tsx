import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../modifiers';
import { Element } from '../../../../elements';

type ModalCardBodyProps = Partial<Modifiers>;

export const ModalCardBody: React.FunctionComponent<ModalCardBodyProps> = ({
  children,
  className,
  ...props
}: ModalCardBodyProps) => (
  <Element {...props} className={cn('modal-card-body', className)}>
    {children}
  </Element>
);

ModalCardBody.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'section'
};
