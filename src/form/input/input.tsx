import cn from 'classnames';
import * React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';

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
    renderAs="input"
    type={type}
    value={value}
    className={cn('input', className, {
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
