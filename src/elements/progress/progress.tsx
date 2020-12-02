import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type ProgressProps = Omit<React.ComponentPropsWithRef<'progress'>, 'unselectable'> &
  ElementModifier & {
    color?: Colors;
    size?: Sizes;
  };

export const Progress = React.forwardRef<HTMLProgressElement, ProgressProps>(
  ({ className, color, size, ...props }, ref) => (
    <Element
      ref={ref}
      as="progress"
      className={clsx('progress', className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size
      })}
      {...props}
    />
  )
);

Progress.defaultProps = {
  ...modifiers.defaultProps,
  max: 100
};

Progress.displayName = 'Progress';
