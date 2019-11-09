import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

type SelectProps = ElementModifier & {
  color?: Colors;
  disabled?: boolean;
  empty?: boolean;
  loading?: boolean;
  multiple?: boolean;
  readOnly?: boolean;
  rounded?: boolean;
  size?: Sizes;
  value?: string | number | any[];
} & Omit<React.ComponentProps<'select'>, 'size' | 'color' | 'unselectable'>;

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
      className={clsx('select', modifiers.getClassName(rest), className, {
        'is-empty': empty,
        'is-loading': loading,
        'is-multiple': multiple,
        'is-rounded': rounded,
        [`is-${color}`]: color,
        [`is-${size}`]: size
      })}
      style={style}
    >
      <select multiple={multiple} value={value} aria-readonly={readOnly} disabled={disabled} name={name} {...props}>
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
