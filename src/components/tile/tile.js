import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';

const colors = Object.values(CONSTANTS.COLORS);

export const Tile = React.forwardRef(
  ({ children, className, kind, vertical, size, color, notification, ...props }, ref) => (
    <Element
      {...props}
      ref={ref}
      className={cn('tile', className, {
        notification,
        [`is-${kind}`]: kind,
        [`is-${size}`]: size,
        [`is-${color}`]: color,
        'is-vertical': vertical
      })}
    >
      {children}
    </Element>
  )
);

Tile.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  kind: PropTypes.oneOf(['ancestor', 'parent', 'child']),
  vertical: PropTypes.bool,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  color: PropTypes.oneOf(colors),
  notification: PropTypes.bool
};

Tile.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div',
  vertical: false,
  notification: false
};
