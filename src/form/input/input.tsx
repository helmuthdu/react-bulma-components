import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type InputProps = ElementModifier & {
  color?: Colors;
  inactive?: boolean;
  readOnly?: boolean;
  size?: Sizes;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'search' | 'color' | 'date' | 'time' | 'datetime-local';
  value?: string | number;
} & Omit<React.ComponentProps<'input'>, 'color' | 'size' | 'unselectable' | 'value'>;

export const Input: React.FunctionComponent<InputProps> = ({
  className,
  color,
  disabled,
  inactive,
  name,
  placeholder,
  readOnly,
  size,
  type,
  value,
  ...props
}: InputProps) => (
  // @ts-ignore
  <Element
    disabled={disabled}
    name={name}
    placeholder={placeholder}
    readOnly={readOnly || inactive}
    as="input"
    type={type}
    value={value}
    className={clsx('input', className, {
      'is-static': inactive,
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
    {...props}
  />
);

Input.defaultProps = {
  ...modifiers.defaultProps,
  type: 'text',
  value: ''
};
