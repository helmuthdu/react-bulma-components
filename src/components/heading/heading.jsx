import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';

export const Heading = ({ children, className, size, subtitle, weight, spaced, heading, ...props }) => (
  <Element
    {...props}
    className={cn(className, {
      title: !subtitle && !heading,
      subtitle,
      heading,
      [`is-${size}`]: size,
      [`has-text-weight-${weight}`]: weight,
      'is-spaced': spaced && !subtitle
    })}
  >
    {children}
  </Element>
);

Heading.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  heading: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  spaced: PropTypes.bool,
  subtitle: PropTypes.bool,
  weight: PropTypes.oneOf(['light', 'normal', 'semibold', 'bold'])
};

Heading.defaultProps = {
  ...modifiers.defaultProps,
  heading: false,
  renderAs: 'h1',
  spaced: false,
  subtitle: false
};
