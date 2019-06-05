import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type FieldLabelProps = Partial<Modifiers> & {
  size?: 'small' | 'normal' | 'medium' | 'large';
};

export const FieldLabel: React.FunctionComponent<FieldLabelProps> = ({
  children,
  className,
  size,
  ...props
}: FieldLabelProps) => (
  <Element
    {...props}
    className={cn('field-label', className, {
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

FieldLabel.defaultProps = {
  ...modifiers.defaultProps
};
