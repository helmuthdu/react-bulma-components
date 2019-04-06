import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../element';

export const MediaItem = ({ children, className, position, ...props }) => {
  const pos = position === 'center' ? 'content' : position;
  return (
    <Element
      {...props}
      className={cn(className, {
        [`media-${pos}`]: pos
      })}
    >
      {children}
    </Element>
  );
};

MediaItem.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  position: PropTypes.oneOf(['center', 'right', 'left']),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object
};

MediaItem.defaultProps = {
  ...modifiers.defaultProps,
  position: 'center',
  renderAs: 'div'
};
