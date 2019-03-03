import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

const colors = Object.values(CONSTANTS.COLORS);

export const Input = React.forwardRef(
  ({ className, type, size, color, readOnly, inactive, disabled, placeholder, value, name, ...props }, ref) => (
    <Element
      {...props}
      ref={ref}
      renderAs="input"
      name={name}
      value={value}
      type={type}
      placeholder={placeholder}
      readOnly={readOnly || inactive}
      disabled={disabled}
      className={cn('input', className, {
        'is-static': inactive,
        [`is-${size}`]: size,
        [`is-${color}`]: color
      })}
    />
  )
);

Input.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  disabled: PropTypes.bool,
  inactive: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
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
  value: PropTypes.string
};

Input.defaultProps = {
  ...modifiers.defaultProps,
  type: 'text',
  value: ''
};
