import clsx from 'clsx';
import * as React from 'react';
import { ChangeEvent, useEffect, useState } from 'react';
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
} & Omit<React.ComponentProps<'select'>, 'ref' | 'size' | 'color' | 'unselectable'>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
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
      value: initialValue,
      onChange,
      ...props
    },
    ref
  ) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return (
      <div
        className={clsx('select', modifiers.getClassName(props), className, {
          'is-empty': empty,
          'is-loading': loading,
          'is-multiple': multiple,
          'is-rounded': rounded,
          [`is-${color}`]: color,
          [`is-${size}`]: size
        })}
        style={style}>
        <select
          ref={ref}
          aria-readonly={readOnly}
          disabled={disabled}
          multiple={multiple}
          name={name}
          value={value}
          onChange={(evt: ChangeEvent<HTMLSelectElement>) => {
            setValue(evt.target.value);
            if (onChange) onChange(evt);
          }}
          {...modifiers.clean(props)}>
          {children}
        </select>
      </div>
    );
  }
);

Select.defaultProps = {
  ...modifiers.defaultProps,
  empty: false,
  loading: false,
  multiple: false,
  rounded: false,
  value: ''
};
