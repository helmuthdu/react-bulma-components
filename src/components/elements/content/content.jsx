import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../element';

export const Content = ({ children, className, size, ...props }) => (
  <Element
    {...props}
    className={cn('content', className, {
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Content.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Content.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
