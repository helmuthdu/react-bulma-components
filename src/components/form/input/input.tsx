import cn from 'classnames';
import React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../elements';

type InputProps = Partial<Omit<React.ComponentProps<'input'>, 'color' | 'size' | 'unselectable'>> &
  ElementModifier & {
    color?: Colors;
    disabled?: boolean;
    inactive?: boolean;
    name?: string;
    placeholder?: string;
    onChange: (...args: any[]) => void;
    readOnly?: boolean;
    size?: Sizes;
    type?: 'text' | 'email' | 'tel' | 'password' | 'number' | 'search' | 'color' | 'date' | 'time' | 'datetime-local';
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
