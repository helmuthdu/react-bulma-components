import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type ModalContentProps = ElementModifier;

export const ModalContent: React.FunctionComponent<ModalContentProps> = ({
  children,
  className,
  ...props
}: ModalContentProps) => (
  <Element {...props} className={clsx('modal-content', className)}>
    {children}
  </Element>
);

ModalContent.defaultProps = {
  ...modifiers.defaultProps
};
