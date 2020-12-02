import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type HeroProps = Omit<React.ComponentPropsWithRef<'section'>, 'unselectable'> &
  ElementModifier & {
    color?: Colors;
    gradient?: boolean;
    size?: 'medium' | 'large' | 'fullheight' | 'fullheight-with-navbar';
  };

export const Hero = React.forwardRef<HTMLDivElement, HeroProps>(
  ({ children, className, color, gradient, size, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        'hero',
        {
          'is-bold': gradient,
          'is-link': size === 'fullheight-with-navbar',
          [`is-${color}`]: color,
          [`is-${size}`]: size
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

Hero.defaultProps = {
  ...modifiers.defaultProps,
  gradient: false,
  as: 'section'
};

Hero.displayName = 'Hero';
