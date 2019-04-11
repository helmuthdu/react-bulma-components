import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../elements';

export const Section = ({ children, className, size, ...props }) => (
  <Element
    {...props}
    className={cn('section', className, {
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Section.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(['medium', 'large'])
};

Section.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'section'
};
