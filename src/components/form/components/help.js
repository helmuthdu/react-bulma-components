import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

const colors = Object.values(CONSTANTS.COLORS);

export const Help = React.forwardRef(({ className, children, color, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('help', className, {
      [`is-${color}`]: color
    })}
  >
    {children}
  </Element>
));

Help.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors)
};

Help.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'p'
};
