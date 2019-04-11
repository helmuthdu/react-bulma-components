import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../modifiers';
import { Element } from '../../../../elements';

export const FieldBody = ({ children, className, ...props }) => (
  <Element {...props} className={cn('field-body', className)}>
    {children}
  </Element>
);

FieldBody.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

FieldBody.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
