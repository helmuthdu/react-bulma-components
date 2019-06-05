import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type FieldBodyProps = Partial<Modifiers>;

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
