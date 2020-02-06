import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

type CheckboxProps = ElementModifier & {
  color?: Colors;
  indeterminate?: boolean;
  size?: Sizes;
  value?: string | number;
} & Omit<React.ComponentProps<'input'>, 'ref' | 'color' | 'size' | 'unselectable' | 'value'>;

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, children, className, color, disabled, indeterminate, name, size, style, value, ...props }, ref) => (
    <label className={clsx('checkbox-container checkbox', modifiers.getClassName(props), className)} style={style}>
      <input
        ref={ref}
        checked={checked}
        disabled={disabled}
        indeterminate={indeterminate}
        name={name}
        type="checkbox"
        value={value}
        {...modifiers.clean(props)}
      />
      <span
        className={clsx('check', {
          [`is-${color}`]: color,
          [`is-${size}`]: size
        })}
      />
      <span className="control-label">{children}</span>
    </label>
  )
);

Checkbox.defaultProps = {
  ...modifiers.defaultProps,
  checked: false,
  indeterminate: false
};
