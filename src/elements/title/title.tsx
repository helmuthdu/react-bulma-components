import clsx from 'clsx';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type TitleProps = Omit<React.ComponentPropsWithRef<'h1'>, 'title' | 'unselectable'> &
  ElementModifier & {
    title?: boolean;
    size?: 1 | 2 | 3 | 4 | 5 | 6;
    spaced?: boolean;
    subtitle?: boolean;
    weight?: 'light' | 'normal' | 'semibold' | 'bold';
  };

export const Title = React.forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, className, size, subtitle, weight, spaced, title, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(className, {
        subtitle: subtitle,
        title: title && !subtitle,
        'is-spaced': spaced && !subtitle,
        [`has-text-weight-${weight}`]: weight,
        [`is-${size}`]: size
      })}
      {...props}>
      {children}
    </Element>
  )
);

Title.defaultProps = {
  ...modifiers.defaultProps,
  title: true,
  as: 'h1',
  spaced: false,
  subtitle: false
};

Title.displayName = 'Title';
