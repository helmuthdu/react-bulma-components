import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../../constants';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type FieldLabelProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    size?: 'normal' & Sizes;
  };

export const FieldLabel = React.forwardRef<HTMLDivElement, FieldLabelProps>(
  ({ children, className, size = 'normal', ...props }, ref) => (
    <Element
      ref={ref}
      {...props}
      className={clsx(
        'field-label',
        {
          [`is-${size}`]: size
        },
        className
      )}>
      {children}
    </Element>
  )
);

FieldLabel.defaultProps = {
  ...modifiers.defaultProps
};

FieldLabel.displayName = 'FieldLabel';
