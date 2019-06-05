import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../../../modifiers';
import { Element } from '../../../../elements';

type ModalCardFootProps = Partial<Omit<React.ComponentProps<'footer'>, 'unselectable'>> & ElementModifier;

export const ModalCardFooter: React.FunctionComponent<ModalCardFootProps> = ({
  children,
  className,
  ...props
}: ModalCardFootProps) => (
  <Element {...props} className={cn('modal-card-foot', className)}>
    {children}
  </Element>
);

ModalCardFooter.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'footer'
};
