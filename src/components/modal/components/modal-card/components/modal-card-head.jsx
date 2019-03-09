import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../modifiers';
import { Button } from '../../../../button';
import { Element } from '../../../../element';

export const ModalCardHead = ({ children, className, onClose, ...props }) => (
  <Element {...props} className={cn('modal-card-head', className)}>
    {children}
    {onClose && <Button data-testid="modal-card-close-button" remove onClick={onClose} />}
  </Element>
);

ModalCardHead.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  onClose: PropTypes.func
};

ModalCardHead.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'header'
};
