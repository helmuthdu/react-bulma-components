import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../../../modifiers';
import { Element } from '../../../../elements';

type ModalCardFootProps = ElementModifier & Omit<React.ComponentProps<'footer'>, 'unselectable'>;

export const ModalCardFooter: React.FunctionComponent<ModalCardFootProps> = ({
  children,
  className,
  ...props
}: ModalCardFootProps) => (
  <Element className={cn('modal-card-foot', className)} {...props}>
    {children}
  </Element>
);

ModalCardFooter.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'footer'
};
