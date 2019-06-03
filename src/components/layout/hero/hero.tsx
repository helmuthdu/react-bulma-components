import cn from 'classnames';
import React from 'react';
import { Colors } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';
import { HeroBody, HeroFooter, HeroHead } from './components';

type HeroProps = Partial<Modifiers> & {
  color?: Colors;
  gradient?: boolean;
  size?: string;
};

export const Hero: React.FunctionComponent<HeroProps> = ({
  children,
  className,
  color,
  gradient,
  size,
  ...props
}: HeroProps) => (
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

(Hero as any).Body = HeroBody;
(Hero as any).Footer = HeroFooter;
(Hero as any).Head = HeroHead;

Hero.defaultProps = {
  ...modifiers.defaultProps,
  gradient: false,
  renderAs: 'section'
};
