import clsx from 'clsx';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type HeadingProps = ElementModifier & {
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
}: HeadingProps) => (
  <Element
    {...props}
    className={clsx(className, {
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
  as: 'h1',
  spaced: false,
  subtitle: false
};
