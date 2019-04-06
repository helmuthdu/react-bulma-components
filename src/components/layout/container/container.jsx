import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../element';

const breakpoints = Object.values(CONSTANTS.BREAKPOINTS);

export const Container = ({ children, fluid, breakpoint, className, ...props }) => (
  <Element
    {...props}
    className={cn('container', className, {
      'is-fluid': fluid,
      [`is-${breakpoint}`]: breakpoint
    })}
  >
    {children}
  </Element>
);

Container.propTypes = {
  ...modifiers.propTypes,
  breakpoint: PropTypes.oneOf(breakpoints),
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object
};

Container.defaultProps = {
  ...modifiers.defaultProps,
  fluid: false,
  renderAs: 'div'
};
