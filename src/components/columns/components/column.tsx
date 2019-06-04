import cn from 'classnames';
import * as React from 'react';
import { Sizes } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

type DisplayType = {
  size?: any;
  offset?: any;
  narrow?: boolean;
};

type ColumnProps = Partial<Modifiers> & {
  size?: Sizes | 'half' | 'one-quarter' | 'one-third' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  offset?: any;
  narrow?: boolean;
  touch?: DisplayType;
  mobile?: DisplayType;
  tablet?: DisplayType;
  desktop?: DisplayType;
  widescreen?: DisplayType;
  fullhd?: DisplayType;
};

export const Column: React.FunctionComponent<ColumnProps> = ({
  children,
  className,
  desktop,
  fullhd,
  mobile,
  narrow,
  offset,
  size,
  tablet,
  touch,
  widescreen,
  ...props
}: ColumnProps) => (
  <Element
    {...props}
    className={cn(className, 'column', {
      [`is-${size}`]: size,
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
      [`is-offset-${offset}`]: offset,
      'is-narrow': narrow,
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
  >
    {children}
  </Element>
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
