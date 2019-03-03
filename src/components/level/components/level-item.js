import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const LevelItem = React.forwardRef(({ children, className, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('level-item', className)}>
    {children}
  </Element>
));

LevelItem.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

LevelItem.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
