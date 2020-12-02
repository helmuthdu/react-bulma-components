import clsx from 'clsx';
import * as React from 'react';
import { ChangeEvent, useEffect, useState } from 'react';
import { Colors, Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type InputProps = Omit<React.ComponentPropsWithRef<'input'>, 'size' | 'unselectable' | 'value'> &
  ElementModifier & {
    color?: Colors;
    inactive?: boolean;
    readOnly?: boolean;
    rounded?: boolean;
    size?: Sizes;
    type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'search' | 'color' | 'date' | 'time' | 'datetime-local';
    value?: string | number;
  };

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      color,
      disabled,
      inactive,
      name,
      placeholder,
      readOnly,
      rounded,
      size,
      type,
      value: initialValue = '',
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
      <Element
        ref={ref}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly || inactive}
        as="input"
        type={type}
        value={value}
        onChange={(evt: ChangeEvent<HTMLInputElement>) => {
          setValue(evt.target.value);
          if (onChange) onChange(evt);
        }}
        className={clsx(
          'input',
          {
            'is-static': inactive,
            'is-rounded': rounded,
            [`is-${color}`]: color,
            [`is-${size}`]: size
          },
          className
        )}
        {...props}
      />
    );
  }
);

Input.defaultProps = {
  ...modifiers.defaultProps,
  type: 'text',
  value: ''
};

Input.displayName = 'Input';
