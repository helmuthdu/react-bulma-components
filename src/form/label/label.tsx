import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

type LabelProps = Omit<React.ComponentPropsWithRef<'label'>, 'unselectable'> &
  ElementModifier & {
    size?: Sizes;
  };

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ children, className, size, ...props }, ref) => (
  <label
    ref={ref}
    className={clsx(
      'label',
      {
        [`is-${size}`]: size
      },
      modifiers.getClassName(props),
      className
    )}
    {...modifiers.clean(props)}>
    {children}
  </label>
));

Label.defaultProps = {
  ...modifiers.defaultProps
};

Label.displayName = 'Label';
