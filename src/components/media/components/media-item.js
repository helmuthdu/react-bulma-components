import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const MediaItem = React.forwardRef(({ children, className, position, ...props }, ref) => {
  const p = position === 'center' ? 'content' : position;
  return (
    <Element
      {...props}
      ref={ref}
      className={cn(className, {
        [`media-${p}`]: p
      })}
    >
      {children}
    </Element>
  );
});

MediaItem.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  position: PropTypes.oneOf(['center', 'right', 'left'])
};

MediaItem.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div',
  position: 'center'
};
