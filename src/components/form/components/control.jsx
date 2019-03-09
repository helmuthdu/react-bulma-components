import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const Control = ({ children, className, fullwidth, iconLeft, iconRight, loading, size, ...props }) => (
  <Element
    {...props}
    className={cn('control', className, {
      'is-expanded': fullwidth,
      'has-icons-left': iconLeft,
      'has-icons-right': iconRight,
      'is-loading': loading,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Control.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  fullwidth: PropTypes.bool,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  loading: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object
};

Control.defaultProps = {
  ...modifiers.defaultProps,
  fullwidth: false,
  iconLeft: false,
  iconRight: false,
  loading: false,
  renderAs: 'div'
};
