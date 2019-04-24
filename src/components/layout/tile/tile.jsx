import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../../elements';

const colors = Object.values(CONSTANTS.COLORS);

export const Tile = ({ children, className, context, vertical, size, color, notification, ...props }) => (
  <Element
    {...props}
    className={cn('tile', className, {
      notification,
      'is-vertical': vertical,
      [`is-${color}`]: color,
      [`is-${context}`]: context,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Tile.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  context: PropTypes.oneOf(['ancestor', 'parent', 'child']),
  notification: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  style: PropTypes.object,
  vertical: PropTypes.bool
};

Tile.defaultProps = {
  ...modifiers.defaultProps,
  notification: false,
  renderAs: 'div',
  vertical: false
};
