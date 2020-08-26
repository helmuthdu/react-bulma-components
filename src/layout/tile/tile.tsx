import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type TileProps = ElementModifier & {
  color?: Colors;
  context?: 'ancestor' | 'parent' | 'child';
  notification?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  vertical?: boolean;
} & Omit<React.ComponentProps<'div'>, 'ref' | 'color' | 'size' | 'unselectable'>;

export const Tile = React.forwardRef<HTMLDivElement, TileProps>(
  ({ children, className, color, context, notification, size, vertical, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx('tile', className, {
        notification,
        'is-vertical': vertical,
        [`is-${color}`]: color,
        [`is-${context}`]: context,
        [`is-${size}`]: size
      })}
      {...props}>
      {children}
    </Element>
  )
);

Tile.defaultProps = {
  ...modifiers.defaultProps,
  notification: false,
  vertical: false
};
