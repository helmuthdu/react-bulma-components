import cn from 'classnames';
import * as React from 'react';
import { useState } from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';

type SwitchProps = Partial<Modifiers> & {
  checked?: boolean;
  color?: Colors;
  disabled?: boolean;
  name?: string;
  onChange: (...args: any[]) => any;
  size?: Sizes;
  value?: string | number;
};

export const Switch: React.FunctionComponent<SwitchProps> = ({
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
}: SwitchProps) => {
  const props = modifiers.clean(allProps);
  const [isMouseDown, setMouseDown] = useState(false);
  return (
    <label
      data-testid="switch-label"
      className={cn('switch', modifiers.getClassName(allProps), className)}
      onMouseDown={() => setMouseDown(true)}
      onMouseOut={() => setMouseDown(false)}
      onMouseUp={() => setMouseDown(false)}
      style={style}
    >
      <input
        {...props}
        data-testid="switch-input"
        checked={checked}
        disabled={disabled}
        name={name}
        type="checkbox"
        value={value}
      />
      <span
        data-testid="switch-check"
        className={cn('check', {
          'is-elastic': isMouseDown && !disabled,
          [`is-${color}`]: color,
          [`is-${size}`]: size
        })}
      />
      <span className="control-label">{children}</span>
    </label>
  );
};

Switch.defaultProps = {
  ...modifiers.defaultProps,
  checked: false
};
