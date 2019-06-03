import cn from 'classnames';
import React from 'react';
import { Colors } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';

type SelectProps = Partial<Modifiers> & {
  color?: Colors;
  disabled?: boolean;
  empty?: boolean;
  loading?: boolean;
  multiple?: boolean;
  name?: string;
  onChange: (...args: any[]) => any;
  readOnly?: boolean;
  rounded?: boolean;
  size?: any;
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
  ...allProps
}: SelectProps) => {
  const props = modifiers.clean(allProps);
  return (
    <div
      className={cn('select', modifiers.getClassName(allProps), className, {
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
