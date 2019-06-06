import cn from 'classnames';
import React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';

type SelectProps = Partial<Omit<React.ComponentProps<'select'>, 'size' | 'color' | 'unselectable'>> &
  ElementModifier & {
    color?: Colors;
    disabled?: boolean;
    empty?: boolean;
    loading?: boolean;
    multiple?: boolean;
    name?: string;
    onChange: (...args: any[]) => void;
    readOnly?: boolean;
    rounded?: boolean;
    size?: Sizes;
    value?: string | number | any[];
  };

export const Select: React.FunctionComponent<SelectProps> = ({
  children,
  className,
  color,
  disabled,
  empty,
  loading,
  multiple,
  name,
  readOnly,
  rounded,
  size,
  style,
  value,
  ...rest
}: SelectProps) => {
  const props = modifiers.clean(rest);
  return (
    <div
      className={cn('select', modifiers.getClassName(rest), className, {
        'is-empty': empty,
        'is-loading': loading,
        'is-multiple': multiple,
        'is-rounded': rounded,
        [`is-${color}`]: color,
        [`is-${size}`]: size
      })}
      style={style}
    >
      <select {...props} multiple={multiple} value={value} aria-readonly={readOnly} disabled={disabled} name={name}>
        {children}
      </select>
    </div>
  );
};

Select.defaultProps = {
  ...modifiers.defaultProps,
  empty: false,
  loading: false,
  multiple: false,
  rounded: false,
  value: ''
};
