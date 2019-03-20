import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';

const colors = Object.values(CONSTANTS.COLORS);

export const Progress = ({ className, value, max, color, size, ...props }) => (
  <Element
    renderAs="progress"
    {...props}
    max={max}
    value={value}
    className={cn('progress', className, {
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
  />
);

Progress.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  max: PropTypes.number,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object,
  value: PropTypes.number
};

Progress.defaultProps = {
  ...modifiers.defaultProps,
  max: 100
};
