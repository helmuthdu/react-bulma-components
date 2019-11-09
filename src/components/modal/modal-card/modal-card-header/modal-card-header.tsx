import clsx from 'clsx';
import * as React from 'react';
import { Button, Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type ModalCardHeadProps = ElementModifier & {
  onClose?: () => void;
} & Omit<React.ComponentProps<'header'>, 'unselectable'>;

export const ModalCardHeader: React.FunctionComponent<ModalCardHeadProps> = ({
  children,
  className,
  onClose,
  testId,
  ...props
}: ModalCardHeadProps) => (
  <Element className={clsx('modal-card-head', className)} {...props}>
    {children}
    {onClose && <Button data-testid={testId} remove onClick={onClose} />}
  </Element>
);

ModalCardHeader.defaultProps = {
  ...modifiers.defaultProps,
  as: 'header'
};
