import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

export const FieldLabel = ({ children, className, size, ...props }) => (
  <Element
    {...props}
    className={cn('field-label', className, {
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

FieldLabel.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large'])
};

FieldLabel.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
