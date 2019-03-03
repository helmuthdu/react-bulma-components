import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const LevelSide = React.forwardRef(({ children, className, align, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn(className, {
      [`level-${align}`]: align
    })}
  >
    {children}
  </Element>
));
LevelSide.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  align: PropTypes.string
};

LevelSide.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div',
  align: 'left'
};
