import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type ColumnValue =
  | Sizes
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 'three-quarters'
  | 'two-thirds'
  | 'half'
  | 'full'
  | 'one-third'
  | 'one-quarter'
  | 'one-fifth'
  | 'two-fifths'
  | 'three-fifths'
  | 'four-fifths';

type ColumnSize = {
  narrow?: boolean;
  offset?: ColumnValue;
  size?: ColumnValue;
};

type ColumnProps = ElementModifier &
  ColumnSize & {
    mobile?: ColumnSize;
    tablet?: ColumnSize;
    touch?: ColumnSize;
    desktop?: ColumnSize;
    widescreen?: ColumnSize;
    fullhd?: ColumnSize;
  } & Omit<React.ComponentProps<'div'>, 'ref' | 'size' | 'unselectable'>;

export const Column = React.forwardRef<HTMLDivElement, ColumnProps>(
  (
    {
      children,
      className,
      desktop = {},
      fullhd = {},
      mobile = {},
      narrow = {},
      offset,
      size,
      tablet = {},
      touch = {},
      widescreen = {},
      ...props
    },
    ref
  ) => (
    <Element
      ref={ref}
      className={clsx('column', className, modifiers.getClassName(props), {
        'is-narrow': narrow,
        [`is-${size}`]: size,
        [`is-offset-${offset}`]: offset,
        [`is-${touch.size}-mobile`]: touch.size,
        [`is-${mobile.size}-mobile`]: mobile.size,
        [`is-${tablet.size}-tablet`]: tablet.size,
        [`is-${desktop.size}-desktop`]: desktop.size,
        [`is-${widescreen.size}-widescreen`]: widescreen.size,
        [`is-${fullhd.size}-fullhd`]: fullhd.size,
        [`is-offset-${touch.offset}-mobile`]: touch.offset,
        [`is-offset-${mobile.offset}-mobile`]: mobile.offset,
        [`is-offset-${tablet.offset}-tablet`]: tablet.offset,
        [`is-offset-${desktop.offset}-desktop`]: desktop.offset,
        [`is-offset-${widescreen.offset}-widescreen`]: widescreen.offset,
        [`is-offset-${fullhd.offset}-fullhd`]: fullhd.offset,
        'is-narrow-touch': touch.narrow,
        'is-narrow-mobile': mobile.narrow,
        'is-narrow-tablet': tablet.narrow,
        'is-narrow-desktop': desktop.narrow,
        'is-narrow-widescreen': widescreen.narrow,
        'is-narrow-fullhd': fullhd.narrow
      })}
      {...modifiers.clean(props)}>
      {children}
    </Element>
  )
);

Column.defaultProps = {
  ...modifiers.defaultProps,
  narrow: false,
  mobile: {},
  touch: {},
  tablet: {},
  desktop: {},
  widescreen: {},
  fullhd: {}
};

Column.displayName = 'Column';
