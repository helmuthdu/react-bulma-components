import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../../constants';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type FieldLabelProps = ElementModifier & {
  size?: 'normal' | Sizes;
};

export const FieldLabel = React.forwardRef<HTMLElement, FieldLabelProps>(
  ({ children, className, size = 'normal', ...props }, ref) => (
    <Element
      ref={ref}
      {...props}
      className={clsx('field-label', className, {
        [`is-${size}`]: size
      })}
    >
      {children}
    </Element>
  )
);

FieldLabel.defaultProps = {
  ...modifiers.defaultProps
};
