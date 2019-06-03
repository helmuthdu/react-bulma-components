import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../element';

type HeadingProps = Partial<Modifiers> & {
  heading?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6;
  spaced?: boolean;
  subtitle?: boolean;
  weight?: 'light' | 'normal' | 'semibold' | 'bold';
};

export const Heading: React.FunctionComponent<HeadingProps> = ({
  children,
  className,
  size,
  subtitle,
  weight,
  spaced,
  heading,
  ...props
}: any) => (
  <Element
    {...props}
    className={cn(className, {
      title: !subtitle && !heading,
      subtitle,
      heading,
      'is-spaced': spaced && !subtitle,
      [`has-text-weight-${weight}`]: weight,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Heading.defaultProps = {
  ...modifiers.defaultProps,
  heading: false,
  renderAs: 'h1',
  spaced: false,
  subtitle: false
};
