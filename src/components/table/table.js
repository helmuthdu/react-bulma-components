import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';

export const Table = React.forwardRef(({ children, className, hoverable, size, striped, bordered, ...props }, ref) => (
  <Element
    renderAs="table"
    {...props}
    ref={ref}
    className={cn('table', className, {
      'is-bordered': bordered,
      'is-hoverable': hoverable,
      'is-striped': striped,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
));

Table.propTypes = {
  ...modifiers.propTypes,
  bordered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.oneOf(['fullwidth', 'narrow']),
  striped: PropTypes.bool,
  hoverable: PropTypes.bool,
  style: PropTypes.object
};

Table.defaultProps = {
  ...modifiers.defaultProps,
  size: 'fullwidth',
  striped: true,
  hoverable: false,
  bordered: false
};
