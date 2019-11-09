import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type ModalCardTitleProps = ElementModifier & Omit<React.ComponentProps<'span'>, 'unselectable'>;

export const ModalCardTitle: React.FunctionComponent<ModalCardTitleProps> = ({
  children,
  className,
  ...props
}: ModalCardTitleProps) => (
  <Element className={clsx('modal-card-title', className)} {...props}>
    {children}
  </Element>
);

ModalCardTitle.defaultProps = {
  ...modifiers.defaultProps,
  as: 'span'
};
