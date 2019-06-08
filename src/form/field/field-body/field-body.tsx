import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type FieldBodyProps = ElementModifier;

export const FieldBody: React.FunctionComponent<FieldBodyProps> = ({
  children,
  className,
  ...props
}: FieldBodyProps) => (
  <Element {...props} className={cn('field-body', className)}>
    {children}
  </Element>
);

FieldBody.defaultProps = {
  ...modifiers.defaultProps
};
