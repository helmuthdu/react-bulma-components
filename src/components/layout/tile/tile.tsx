import cn from 'classnames';
import React from 'react';
import { Colors } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

type TileProps = Partial<Modifiers> & {
  color?: Colors;
  context?: 'ancestor' | 'parent' | 'child';
  notification?: boolean;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  vertical?: boolean;
};

export const Tile: React.FunctionComponent<TileProps> = ({
  children,
  className,
  context,
  vertical,
  size,
  color,
  notification,
  ...props
}: TileProps) => (
  <Element
    {...props}
    className={cn('tile', className, {
      notification,
      'is-vertical': vertical,
      [`is-${color}`]: color,
      [`is-${context}`]: context,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);
Tile.defaultProps = {
  ...modifiers.defaultProps,
  notification: false,
  vertical: false
};
