/* eslint-disable no-unused-vars */
import clsx from 'clsx';
import { Breakpoints, Display, Gap, Spacing, TextAlignment } from '../constants';

type BreakpointSize = {
  display?: Display | { only: Display };
  gap?: Gap;
  hidden?: boolean | { only: boolean };
  textSize?: Spacing | { only: Spacing };
  textAlignment?: TextAlignment;
};

export type BreakpointsSize = { [key in Breakpoints]?: BreakpointSize };

export type ResponsiveModifier = BreakpointsSize;

const getValue = (val: any) => val?.only ?? val;
const getOnly = (val: any) => (val?.only ? '-only' : '');

const getSizeClassFromProp = (sizes: BreakpointsSize = {}) =>
  Object.entries(sizes)
    .filter(([key, values]) => values)
    .reduce(
      // @ts-ignore
      (classes, [breakpoint, { display, gap, hidden, textAlignment, textSize }]) => ({
        ...classes,
        'is-variable': gap !== undefined,
        [`is-${gap}-${breakpoint}`]: gap !== undefined,
        [`has-text-${getValue(textAlignment)}-${breakpoint}${getOnly(textAlignment)}`]: textAlignment,
        [`is-${getValue(display)}-${breakpoint}${getOnly(display)}`]: display,
        [`is-hidden-${breakpoint}${getOnly(hidden)}`]: hidden,
        [`is-size-${textSize}-${breakpoint}`]: textSize !== undefined
      }),
      {}
    );

const modifier = {
  defaultProps: {},
  getClassName: ({ mobile, tablet, desktop, widescreen, fullhd, touch }: ResponsiveModifier) =>
    clsx({
      ...getSizeClassFromProp({ mobile, tablet, desktop, widescreen, fullhd, touch })
    }),
  clean: ({ mobile, tablet, desktop, widescreen, fullhd, touch, ...props }: ResponsiveModifier) => props
};

export default modifier;
