import cn from 'classnames';
import React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';

type CheckboxProps = Partial<Modifiers> & {
  checked?: boolean;
  color?: Colors;
  disabled?: boolean;
  indeterminate?: boolean;
  name?: string;
  onChange: (...args: any[]) => any;
  size?: Sizes;
  value?: string | number;
};

export const Checkbox: React.FunctionComponent<CheckboxProps> = ({
  checked,
  children,
  className,
  color,
  disabled,
  indeterminate,
  name,
  size,
  style,
  value,
  ...allProps
}: CheckboxProps) => {
  const props = modifiers.clean(allProps);
  return (
    <label
      data-testid="checkbox-label"
      className={cn('b-checkbox checkbox', modifiers.getClassName(allProps), className)}
      style={style}
    >
      <input
        {...props}
        data-testid="checkbox-input"
        checked={checked}
        disabled={disabled}
        indeterminate={indeterminate}
        name={name}
        type="checkbox"
        value={value}
      />
      <span
        data-testid="checkbox-check"
        className={cn('check', {
          [`is-${color}`]: color,
          [`is-${size}`]: size
        })}
      />
      <span className="control-label">{children}</span>
    </label>
  );
};
Checkbox.defaultProps = {
  ...modifiers.defaultProps,
  checked: false,
  indeterminate: false
};
