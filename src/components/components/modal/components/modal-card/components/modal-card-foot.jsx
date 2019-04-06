import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../../modifiers';
import { Element } from '../../../../../layout/element';

export const ModalCardFoot = ({ children, className, ...props }) => (
  <Element {...props} className={cn('modal-card-foot', className)}>
    {children}
  </Element>
);

ModalCardFoot.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

ModalCardFoot.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'footer'
};
