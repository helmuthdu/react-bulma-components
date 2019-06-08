import cn from 'classnames';
import * as React from 'react';
import { Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type FieldLabelProps = ElementModifier & {
  size?: 'normal' | Sizes;
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
