import cn from 'classnames';
import React from 'react';
import { Colors } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';

type RadioProps = Partial<Modifiers> & {
  checked?: boolean;
  color?: Colors;
  disabled?: boolean;
  name?: string;
  onChange: (...args: any[]) => any;
  size?: any;
  value?: string | number;
};

export const Radio: React.FunctionComponent<RadioProps> = ({
  className,
  style,
  disabled,
  value,
  children,
  checked,
  color,
  size,
  name,
  ...allProps
}: RadioProps) => {
  const props = modifiers.clean(allProps);
  return (
    <label
      data-testid="radio-label"
      className={cn('b-radio radio', modifiers.getClassName(allProps), className)}
      style={style}
    >
      <input
        {...props}
        data-testid="radio-input"
        name={name}
        type="radio"
        value={value}
        disabled={disabled}
        checked={checked}
      />
      <span
        data-testid="radio-check"
        className={cn('check', {
          [`is-${color}`]: color,
          [`is-${size}`]: size
        })}
      />
      <span className="control-label">{children}</span>
    </label>
  );
};

Radio.defaultProps = {
  ...modifiers.defaultProps,
  checked: false
};
