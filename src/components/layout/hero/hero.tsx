import cn from 'classnames';
import React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../elements';

type HeroProps = ElementModifier & {
  color?: Colors;
  gradient?: boolean;
  size?: 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar';
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
      'is-link': size === 'fullheight-with-navbar',
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Hero.defaultProps = {
  ...modifiers.defaultProps,
  gradient: false,
  renderAs: 'section'
};
