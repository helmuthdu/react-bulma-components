import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

export const LevelItem = ({ children, className, ...props }) => (
  <Element {...props} className={cn('level-item', className)}>
    {children}
  </Element>
);

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
