import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type ModalContentProps = Partial<Modifiers>;

export const ModalContent: React.FunctionComponent<ModalContentProps> = ({
  children,
  className,
  ...props
}: ModalContentProps) => (
  <Element {...props} className={cn('modal-content', className)}>
    {children}
  </Element>
);

ModalContent.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
