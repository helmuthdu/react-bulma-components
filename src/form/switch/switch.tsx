import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

const { useState } = React;

type SwitchProps = Omit<React.ComponentPropsWithRef<'input'>, 'size' | 'unselectable' | 'value'> &
  ElementModifier & {
    color?: Colors;
    size?: Sizes;
    rounded?: boolean;
    outlined?: boolean;
    value?: string | number;
  };

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, children, className, color, disabled, name, outlined, rounded, size, style, value, ...props }, ref) => {
    const [isMouseDown, setMouseDown] = useState(false);
    return (
      <label
        className={clsx(
          'switch',
          {
            'is-rounded': rounded,
            'is-outlined': outlined
          },
          modifiers.getClassName(props),
          className
        )}
        onMouseDown={() => setMouseDown(true)}
        onMouseOut={() => setMouseDown(false)}
        onMouseUp={() => setMouseDown(false)}
        style={style}>
        <input
          ref={ref}
          checked={checked}
          disabled={disabled}
          name={name}
          type="checkbox"
          value={value}
          {...modifiers.clean(props)}
        />
        <span
          className={clsx('check', {
            'is-elastic': isMouseDown && !disabled,
            [`is-${color}`]: color,
            [`is-${size}`]: size
          })}
        />
        <span className="control-label">{children}</span>
      </label>
    );
  }
);

Switch.defaultProps = {
  ...modifiers.defaultProps,
  checked: false
};

Switch.displayName = 'Switch';
