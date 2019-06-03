import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../../modifiers';
import { Element } from '../../../../../elements';

type ModalCardFootProps = Partial<Modifiers>;

export const ModalCardFoot: React.FunctionComponent<ModalCardFootProps> = ({
  children,
  className,
  ...props
}: ModalCardFootProps) => (
  <Element {...props} className={cn('modal-card-foot', className)}>
    {children}
  </Element>
);

ModalCardFoot.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'footer'
};
