import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { LevelItem, LevelSide } from './components';

const breakpoints = Object.values(CONSTANTS.BREAKPOINTS);

export const Level = ({ children, className, breakpoint, ...props }) => (
  <Element
    {...props}
    className={cn('level', className, {
      [`is-${breakpoint}`]: breakpoint
    })}
  >
    {children}
  </Element>
);

Level.Side = LevelSide;
Level.Item = LevelItem;

Level.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  breakpoint: PropTypes.oneOf(breakpoints),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Level.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
