import cn from 'classnames';
import * as React from 'react';
import { Colors } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';
import { HeroBody } from './hero-body';
import { HeroFoot } from './hero-foot';
import { HeroHead } from './hero-head';

type HeroProps = ElementModifier & {
  color?: Colors;
  gradient?: boolean;
  size?: 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar';
} & Omit<React.ComponentProps<'section'>, 'color' | 'size' | 'unselectable'>;

export const Hero: React.FunctionComponent<HeroProps> & {
  Body: typeof HeroBody;
  Foot: typeof HeroFoot;
  Header: typeof HeroHead;
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
Hero.Foot = HeroFoot;
Hero.Header = HeroHead;

Hero.defaultProps = {
  ...modifiers.defaultProps,
  gradient: false,
  as: 'section'
};
