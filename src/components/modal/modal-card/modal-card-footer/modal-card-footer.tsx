import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type ModalCardFootProps = ElementModifier & Omit<React.ComponentProps<'footer'>, 'unselectable'>;

export const ModalCardFooter: React.FunctionComponent<ModalCardFootProps> = ({
  children,
  className,
  ...props
}: ModalCardFootProps) => (
  <Element className={clsx('modal-card-foot', className)} {...props}>
    {children}
  </Element>
);

ModalCardFooter.defaultProps = {
  ...modifiers.defaultProps,
  as: 'footer'
};
