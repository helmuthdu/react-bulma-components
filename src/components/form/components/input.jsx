import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

const colors = Object.values(CONSTANTS.COLORS);

export const Input = ({
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
}) => (
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

Input.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  disabled: PropTypes.bool,
  inactive: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object,
  type: PropTypes.oneOf([
    'color',
    'date',
    'datetime-local',
    'email',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'time'
  ]),
  value: PropTypes.string
};

Input.defaultProps = {
  ...modifiers.defaultProps,
  type: 'text',
  value: ''
};
