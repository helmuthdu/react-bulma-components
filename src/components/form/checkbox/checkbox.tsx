import cn from 'classnames';
import React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';

type CheckboxProps = Partial<Omit<React.ComponentProps<'input'>, 'unselectable'>> &
  ElementModifier & {
    checked?: boolean;
    color?: Colors;
    disabled?: boolean;
    indeterminate?: boolean;
    name?: string;
    onChange: (...args: any[]) => void;
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
  ...rest
}: CheckboxProps) => {
  const props = modifiers.clean(rest);
  return (
    <label
      data-testid="checkbox-label"
      className={cn('b-checkbox checkbox', modifiers.getClassName(rest), className)}
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
