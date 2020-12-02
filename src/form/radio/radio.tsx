import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

type RadioProps = Omit<React.ComponentPropsWithRef<'input'>, 'size' | 'unselectable' | 'value'> &
  ElementModifier & {
    color?: Colors;
    size?: Sizes;
    value?: string | number;
  };

export const Radio = React.forwardRef<HTMLSelectElement, RadioProps>(
  ({ checked, children, className, color, disabled, name, size, style, value, ...props }, ref) => (
    <label className={clsx('radio-container radio', modifiers.getClassName(props), className)} style={style}>
      <input
        ref={ref}
        checked={checked}
        disabled={disabled}
        name={name}
        type="radio"
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

Radio.defaultProps = {
  ...modifiers.defaultProps,
  checked: false
};

Radio.displayName = 'Radio';
