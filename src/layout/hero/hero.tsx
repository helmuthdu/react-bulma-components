import cn from 'classnames';
import React from 'react';
import { Colors } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';
import { HeroBody } from './hero-body';
import { HeroFooter } from './hero-footer';
import { HeroHeader } from './hero-header';

type HeroProps = ElementModifier & {
  color?: Colors;
  gradient?: boolean;
  size?: 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar';
} & Omit<React.ComponentProps<'section'>, 'color' | 'size' | 'unselectable'>;

export const Hero: React.FunctionComponent<HeroProps> & {
  Body: typeof HeroBody;
  Footer: typeof HeroFooter;
  Header: typeof HeroHeader;
} = ({ children, className, color, gradient, size, ...props }: HeroProps) => (
  <Element
    className={cn('hero', className, {
      'is-bold': gradient,
      'is-link': size === 'fullheight-with-navbar',
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
    {...props}
  >
    {children}
  </Element>
);

Hero.Body = HeroBody;
Hero.Footer = HeroFooter;
Hero.Header = HeroHeader;

Hero.defaultProps = {
  ...modifiers.defaultProps,
  gradient: false,
  renderAs: 'section'
};
