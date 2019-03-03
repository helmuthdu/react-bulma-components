import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const ModalContent = React.forwardRef(({ children, className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('modal-content', className)}>
    {children}
  </Element>
));

ModalContent.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

ModalContent.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
