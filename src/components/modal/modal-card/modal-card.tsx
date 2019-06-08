import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type ModalCardProps = ElementModifier & {
  onClose?: (...args: any[]) => any;
} & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const ModalCard: React.FunctionComponent<ModalCardProps> = ({
  className,
  onClose,
  children,
  ...props
}: ModalCardProps) => (
  <Element className={cn('modal-card', className)} {...props}>
    {children}
  </Element>
);

ModalCard.defaultProps = {
  ...modifiers.defaultProps
};
