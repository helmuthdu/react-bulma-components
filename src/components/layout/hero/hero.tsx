import cn from 'classnames';
import React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../elements';

type HeroProps = ElementModifier & {
  color?: Colors;
  gradient?: boolean;
  size?: Sizes | 'fullheight';
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

Hero.defaultProps = {
  ...modifiers.defaultProps,
  gradient: false,
  renderAs: 'section'
};
