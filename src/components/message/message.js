import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { MessageBody } from './components/body';
import { MessageHeader } from './components/header';

const colors = Object.values(CONSTANTS.COLORS);

export const Message = ({ children, className, color, size, ...props }) => (
  <Element
    {...props}
    className={cn('message', className, {
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Message.Body = MessageBody;
Message.Header = MessageHeader;

Message.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object
};

Message.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'article'
};
