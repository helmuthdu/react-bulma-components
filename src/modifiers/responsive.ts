/* eslint-disable no-unused-vars */
import clsx from 'clsx';
import { Breakpoints, Spacing } from '../constants';

type BreakpointSize = {
  display?: {
    value?: 'block' | 'flex' | 'inline' | 'inline-block' | 'inline-flex';
    only?: boolean;
  };
  hidden?: {
    value?: boolean;
    only?: boolean;
  };
  textSize?: Spacing;
  textAlignment?: {
    value?: 'centered' | 'justified' | 'left' | 'right';
    only?: boolean;
  };
};

export type BreakpointsSize = { [key in Breakpoints]?: BreakpointSize };

export type ResponsiveModifier = {
  responsive?: BreakpointsSize;
};

const getSizeClassFromProp = (sizes: BreakpointsSize) =>
  Object.entries(sizes).reduce(
    // @ts-ignore
    (classes, [brk, { display = {}, hidden = {}, textAlignment = {}, textSize }]) => ({
      ...classes,
      [`has-text-${textAlignment.value}-${brk}${textAlignment.only ? '-only' : ''}`]: textAlignment.value,
      [`is-${display.value}-${brk}${display.only ? '-only' : ''}`]: display.value,
      [`is-hidden-${brk}${hidden.only ? '-only' : ''}`]: hidden.value,
      [`is-size-${textSize}-${brk}`]: textSize >= 0
    }),
    {}
  );

export default {
  defaultProps: {},
  getClassName: (props: any) =>
    clsx({
      ...getSizeClassFromProp(props.responsive || {})
    }),
  clean: ({ responsive, ...props }: ResponsiveModifier) => props
};
