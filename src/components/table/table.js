import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';

export const Table = React.forwardRef(({ children, className, size, striped, bordered, ...props }, ref) => (
  <Element
    renderAs="table"
    {...props}
    ref={ref}
    className={cn('table', className, {
      [`is-${size}`]: size,
      'is-bordered': bordered,
      'is-striped': striped
    })}
  >
    {children}
  </Element>
));

Table.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(['fullwidth', 'narrow']),
  striped: PropTypes.bool,
  bordered: PropTypes.bool
};

Table.defaultProps = {
  ...modifiers.defaultProps,
  size: 'fullwidth',
  striped: true,
  bordered: false
};
