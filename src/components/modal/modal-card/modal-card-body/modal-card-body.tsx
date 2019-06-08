import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../../elements';

type ModalCardBodyProps = ElementModifier;

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
  as: 'section'
};
