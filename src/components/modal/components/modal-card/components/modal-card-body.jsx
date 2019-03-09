import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../modifiers';
import { Element } from '../../../../element';

export const ModalCardBody = ({ children, className, ...props }) => (
  <Element {...props} className={cn('modal-card-body', className)}>
    {children}
  </Element>
);

ModalCardBody.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.string
};

ModalCardBody.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'section'
};
