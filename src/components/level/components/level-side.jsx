import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const LevelSide = ({ children, className, align, ...props }) => (
  <Element
    {...props}
    className={cn(className, {
      [`level-${align}`]: align
    })}
  >
    {children}
  </Element>
);
LevelSide.propTypes = {
  ...modifiers.propTypes,
  align: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object
};

LevelSide.defaultProps = {
  ...modifiers.defaultProps,
  align: 'left',
  renderAs: 'div'
};
