import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { HeroBody } from './components/hero-body';
import { HeroFooter } from './components/hero-footer';
import { HeroHead } from './components/hero-head';

const colors = Object.values(CONSTANTS.COLORS);

export const Hero = React.forwardRef(({ children, className, color, gradient, size, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('hero', className, {
      [`is-${color}`]: color,
      [`is-${size}`]: size,
      'is-bold': gradient
    })}
  >
    {children}
  </Element>
));

Hero.Head = HeroHead;
Hero.Body = HeroBody;
Hero.Footer = HeroFooter;

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
  renderAs: 'section',
  gradient: false
};
