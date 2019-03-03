import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';

export const Box = React.forwardRef(({ children, className, ...props }, ref) => (
  <Element ref={ref} {...props} className={cn('box', className)}>
    {children}
  </Element>
));

Box.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Box.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
