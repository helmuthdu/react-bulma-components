import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../element';

export const MediaContent = ({ children, className, ...props }) => (
  <Element {...props} className={cn(className, 'content')}>
    {children}
  </Element>
);

MediaContent.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

MediaContent.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
