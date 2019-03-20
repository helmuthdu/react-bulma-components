import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { HeroBody, HeroFooter, HeroHead } from './components';

const colors = Object.values(CONSTANTS.COLORS);

export const Hero = ({ children, className, color, gradient, size, ...props }) => (
  <Element
    {...props}
    className={cn('hero', className, {
      'is-bold': gradient,
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Hero.Body = HeroBody;
Hero.Footer = HeroFooter;
Hero.Head = HeroHead;

Hero.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  color: PropTypes.oneOf(colors),
  gradient: PropTypes.bool,
  size: PropTypes.oneOf([...Object.values(CONSTANTS.COLORS), 'fullheight'])
};

Hero.defaultProps = {
  ...modifiers.defaultProps,
  gradient: false,
  renderAs: 'section'
};
