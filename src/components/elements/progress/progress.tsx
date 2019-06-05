import cn from 'classnames';
import React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../element';

type ProgressProps = Partial<Omit<React.ComponentProps<'progress'>, 'color' | 'max' | 'value' | 'unselectable'>> &
  ElementModifier & {
    color?: Colors;
    max?: number;
    size?: Sizes;
    value?: number;
  };

export const Progress: React.FunctionComponent<ProgressProps> = ({
  className,
  value,
  max,
  color,
  size,
  ...props
}: ProgressProps) => (
  <Element
    renderAs="progress"
    {...props}
    max={max}
    value={value}
    className={cn('progress', className, {
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
  />
);

Progress.defaultProps = {
  ...modifiers.defaultProps,
  max: 100
};
