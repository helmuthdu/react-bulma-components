import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

export const MessageHeader = ({ children, className, ...props }) => (
  <Element {...props} className={cn('message-header', className)}>
    {children}
  </Element>
);

MessageHeader.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

MessageHeader.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
