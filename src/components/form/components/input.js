import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

const colors = Object.values(CONSTANTS.COLORS);

export const Input = React.forwardRef(
  ({ className, type, size, color, readOnly, isStatic, disabled, placeholder, value, name, ...props }, ref) => (
    <Element
      {...props}
      ref={ref}
      renderAs="input"
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      readOnly={readOnly || isStatic}
      disabled={disabled}
      className={cn('input', className, {
        'is-static': isStatic,
        [`is-${size}`]: size,
        [`is-${color}`]: color
      })}
    />
  )
);

Input.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOf([
    'text',
    'email',
    'tel',
    'password',
    'number',
    'search',
    'color',
    'date',
    'time',
    'datetime-local'
  ]),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  color: PropTypes.oneOf(colors),
  readOnly: PropTypes.bool,
  isStatic: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string
};

Input.defaultProps = {
  ...modifiers.defaultProps,
  value: '',
  type: 'text',
  isStatic: false,
  placeholder: ''
};
