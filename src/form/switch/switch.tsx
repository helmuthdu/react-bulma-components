import cn from 'classnames';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

const { useState } = React;

type SwitchProps = ElementModifier & {
  color?: Colors;
  size?: Sizes;
  value?: string | number;
} & Omit<React.ComponentProps<'input'>, 'color' | 'size' | 'unselectable' | 'value'>;

export const Switch: React.FunctionComponent<SwitchProps> = ({
  checked,
  children,
  className,
  color,
  disabled,
  name,
  size,
  style,
  testId,
  value,
  ...rest
}: SwitchProps) => {
  const props = modifiers.clean(rest);
  const [isMouseDown, setMouseDown] = useState(false);
  return (
    <label
      data-testid={(Array.isArray(testId) ? testId[0] : testId) || undefined}
      className={cn('switch', modifiers.getClassName(rest), className)}
      onMouseDown={() => setMouseDown(true)}
      onMouseOut={() => setMouseDown(false)}
      onMouseUp={() => setMouseDown(false)}
      style={style}
    >
      <input
        data-testid={Array.isArray(testId) ? testId[2] : undefined}
        checked={checked}
        disabled={disabled}
        name={name}
        type="checkbox"
        value={value}
        {...props}
      />
      <span
        data-testid={Array.isArray(testId) ? testId[1] : undefined}
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
