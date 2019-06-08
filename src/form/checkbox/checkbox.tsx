import cn from 'classnames';
import React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

type CheckboxProps = ElementModifier & {
  color?: Colors;
  indeterminate?: boolean;
  size?: Sizes;
  value?: string | number;
} & Omit<React.ComponentProps<'input'>, 'color' | 'size' | 'unselectable' | 'value'>;

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
  testId,
  ...rest
}: CheckboxProps) => {
  const props = modifiers.clean(rest);
  return (
    <label
      data-testid={(Array.isArray(testId) ? testId[0] : testId) || undefined}
      className={cn('checkbox-container checkbox', modifiers.getClassName(rest), className)}
      style={style}
    >
      <input
        data-testid={Array.isArray(testId) ? testId[2] : undefined}
        checked={checked}
        disabled={disabled}
        indeterminate={indeterminate}
        name={name}
        type="checkbox"
        value={value}
        {...props}
      />
      <span
        data-testid={Array.isArray(testId) ? testId[1] : undefined}
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
