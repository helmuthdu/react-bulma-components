import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type FieldBodyProps = ElementModifier;

export const FieldBody: React.FunctionComponent<FieldBodyProps> = ({
  children,
  className,
  ...props
}: FieldBodyProps) => (
  <Element {...props} className={clsx('field-body', className)}>
    {children}
  </Element>
);

FieldBody.defaultProps = {
  ...modifiers.defaultProps
};
