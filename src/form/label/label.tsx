import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

type LabelProps = ElementModifier & {
  size?: Sizes;
} & Omit<React.ComponentProps<'label'>, 'ref' | 'size' | 'unselectable'>;

export const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ children, className, size, ...props }, ref) => (
  <label
    ref={ref}
    className={clsx('label', modifiers.getClassName(props), className, {
      [`is-${size}`]: size
    })}
    {...modifiers.clean(props)}
  >
    {children}
  </label>
));

Label.defaultProps = {
  ...modifiers.defaultProps
};
