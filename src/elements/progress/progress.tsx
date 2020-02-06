import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type ProgressProps = ElementModifier & {
  color?: Colors;
  size?: Sizes;
} & Omit<React.ComponentProps<'progress'>, 'ref' | 'color' | 'unselectable'>;

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
