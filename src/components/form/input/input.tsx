import cn from 'classnames';
import React from 'react';
import { Colors } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

type InputProps = Partial<Modifiers> & {
  color?: Colors;
  disabled?: boolean;
  inactive?: boolean;
  name?: string;
  placeholder?: string;
  onChange: (...args: any[]) => any;
  readOnly?: boolean;
  size?: any;
  type?: 'color' | 'date' | 'datetime-local' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time';
  value?: string | number;
};

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
    {...props}
    disabled={disabled}
    name={name}
    placeholder={placeholder}
    readOnly={readOnly || inactive}
    renderAs="input"
    type={type}
    value={value}
    className={cn('input', className, {
      'is-static': inactive,
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
  />
);

Input.defaultProps = {
  ...modifiers.defaultProps,
  type: 'text',
  value: ''
};
