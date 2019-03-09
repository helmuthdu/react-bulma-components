import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../modifiers';
import { Element } from '../../../../element';

export const ModalCardTitle = ({ children, className, ...props }) => (
  <Element {...props} className={cn('modal-card-title', className)}>
    {children}
  </Element>
);

ModalCardTitle.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

ModalCardTitle.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'p'
};
