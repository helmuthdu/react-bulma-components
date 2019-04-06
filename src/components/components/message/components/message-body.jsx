import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../layout/element';

export const MessageBody = ({ children, className, ...props }) => (
  <Element {...props} className={cn('message-body', className)}>
    {children}
  </Element>
);

MessageBody.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

MessageBody.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
