import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

export const ModalContent = ({ children, className, ...props }) => (
  <Element {...props} className={cn('modal-content', className)}>
    {children}
  </Element>
);

ModalContent.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object
};

ModalContent.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
