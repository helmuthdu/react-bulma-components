import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';

const colors = Object.values(CONSTANTS.COLORS);

export const Notification = React.forwardRef(({ children, className, color, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
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
));

Notification.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  color: PropTypes.oneOf(colors)
};

Notification.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
