import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';

const colors = Object.values(CONSTANTS.COLORS);

export const Notification = ({ children, className, color, ...props }) => (
  <Element
    {...props}
    className={cn(
      'notification',
      {
        [`is-${color}`]: color
      },
      className
    )}
  >
    {children}
  </Element>
);

Notification.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object
};

Notification.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
