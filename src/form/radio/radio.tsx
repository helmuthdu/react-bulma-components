import cn from 'classnames';
import * React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

type RadioProps = ElementModifier & {
  color?: Colors;
  size?: Sizes;
  value?: string | number;
} & Omit<React.ComponentProps<'input'>, 'color' | 'size' | 'unselectable' | 'value'>;

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
  testId,
  ...rest
}: RadioProps) => {
  const props = modifiers.clean(rest);
  return (
    <label
      data-testid={(Array.isArray(testId) ? testId[0] : testId) || undefined}
      className={cn('radio-container radio', modifiers.getClassName(rest), className)}
      style={style}
    >
      <input
        data-testid={Array.isArray(testId) ? testId[2] : undefined}
        name={name}
        type="radio"
        value={value}
        disabled={disabled}
        checked={checked}
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

Radio.defaultProps = {
  ...modifiers.defaultProps,
  checked: false
};
