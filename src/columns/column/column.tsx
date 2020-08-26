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
    { children, className, desktop, fullhd, mobile, narrow, offset, size, tablet, touch, widescreen, ...props },
    ref
  ) => (
    <Element
      ref={ref}
      className={clsx('column', className, modifiers.getClassName(props), {
        'is-narrow': narrow,
        [`is-${size}`]: size,
        [`is-offset-${offset}`]: offset,
        // @ts-ignore
        [`is-${touch.size}-mobile`]: touch.size,
        // @ts-ignore
        [`is-${mobile.size}-mobile`]: mobile.size,
        // @ts-ignore
        [`is-${tablet.size}-tablet`]: tablet.size,
        // @ts-ignore
        [`is-${desktop.size}-desktop`]: desktop.size,
        // @ts-ignore
        [`is-${widescreen.size}-widescreen`]: widescreen.size,
        // @ts-ignore
        [`is-${fullhd.size}-fullhd`]: fullhd.size,
        // @ts-ignore
        [`is-offset-${touch.offset}-mobile`]: touch.offset,
        // @ts-ignore
        [`is-offset-${mobile.offset}-mobile`]: mobile.offset,
        // @ts-ignore
        [`is-offset-${tablet.offset}-tablet`]: tablet.offset,
        // @ts-ignore
        [`is-offset-${desktop.offset}-desktop`]: desktop.offset,
        // @ts-ignore
        [`is-offset-${widescreen.offset}-widescreen`]: widescreen.offset,
        // @ts-ignore
        [`is-offset-${fullhd.offset}-fullhd`]: fullhd.offset,
        // @ts-ignore
        'is-narrow-touch': touch.narrow,
        // @ts-ignore
        'is-narrow-mobile': mobile.narrow,
        // @ts-ignore
        'is-narrow-tablet': tablet.narrow,
        // @ts-ignore
        'is-narrow-desktop': desktop.narrow,
        // @ts-ignore
        'is-narrow-widescreen': widescreen.narrow,
        // @ts-ignore
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
