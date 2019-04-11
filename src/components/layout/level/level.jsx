import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../../elements';
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

Level.Item = LevelItem;
Level.Side = LevelSide;

Level.propTypes = {
  ...modifiers.propTypes,
  breakpoint: PropTypes.oneOf(breakpoints),
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object
};

Level.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
