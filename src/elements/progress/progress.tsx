import cn from 'classnames';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type ProgressProps = ElementModifier & {
  color?: Colors;
  max?: number;
  size?: Sizes;
  value?: number;
} & Omit<React.ComponentProps<'progress'>, 'color' | 'max' | 'value' | 'unselectable'>;

export const Progress: React.FunctionComponent<ProgressProps> = ({
  className,
  value,
  max,
  color,
  size,
  ...props
}: ProgressProps) => (
  // @ts-ignore
  <Element
    renderAs="progress"
    max={max}
    value={value}
    className={cn('progress', className, {
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
    {...props}
  />
);

Progress.defaultProps = {
  ...modifiers.defaultProps,
  max: 100
};
