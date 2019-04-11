import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../modifiers';
import { Element } from '../../../../elements';
import { ModalCardBody, ModalCardFoot, ModalCardHead, ModalCardTitle } from './components';

// eslint-disable-next-line no-unused-vars
export const ModalCard = ({ className, onClose, children, ...props }) => (
  <Element {...props} className={cn('modal-card', className)}>
    {children}
  </Element>
);

ModalCard.Body = ModalCardBody;
ModalCard.Foot = ModalCardFoot;
ModalCard.Head = ModalCardHead;
ModalCard.Title = ModalCardTitle;

ModalCard.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  onClose: PropTypes.func,
  style: PropTypes.object
};

ModalCard.defaultProps = {
  ...modifiers.defaultProps
};
