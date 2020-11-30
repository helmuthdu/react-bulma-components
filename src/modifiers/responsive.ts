/* eslint-disable no-unused-vars */
import clsx from 'clsx';
import { Breakpoints, Display, Gap, Spacing, TextAlignment } from '../constants';

type DisplayWithOnly = Display | { only: Display };
type HiddenWithOnly = boolean | { only: boolean };
type SpacingWithOnly = Spacing | { only: Spacing };
type BreakpointSize = {
  display?: DisplayWithOnly;
  gap?: Gap;
  hidden?: HiddenWithOnly;
  textSize?: SpacingWithOnly;
  textAlignment?: TextAlignment;
};

export type BreakpointsSize = Record<Breakpoints, BreakpointSize>;
export type ResponsiveModifier = { [key in Breakpoints]?: BreakpointSize };

const getValue = (val: DisplayWithOnly | HiddenWithOnly | SpacingWithOnly | any) => val?.only ?? val;
const getOnly = (val: DisplayWithOnly | HiddenWithOnly | SpacingWithOnly | any) => (val?.only ? '-only' : '');
const getSizeClassFromProp = (sizes: BreakpointsSize) =>
  sizes
    ? Object.entries(sizes)
      .filter(([, values]) => values)
      .reduce(
        (classes, [breakpoint, { display, gap, hidden, textAlignment, textSize }]: [string, BreakpointSize]) => ({
          ...classes,
          'is-variable': gap !== undefined,
          [`is-${gap}-${breakpoint}`]: gap !== undefined,
          [`has-text-${getValue(textAlignment)}-${breakpoint}${getOnly(textAlignment)}`]: textAlignment,
          [`is-${getValue(display)}-${breakpoint}${getOnly(display)}`]: display,
          [`is-hidden-${breakpoint}${getOnly(hidden)}`]: hidden,
          [`is-size-${textSize}-${breakpoint}`]: textSize !== undefined
        }),
        {}
      )
    : {};

const modifier = {
  defaultProps: {},
  getClassName: (breakpointsSize: BreakpointsSize) => clsx({ ...getSizeClassFromProp(breakpointsSize) }),
  clean: ({ mobile, tablet, desktop, widescreen, fullhd, touch, ...props }: ResponsiveModifier) => props
};

export default modifier;
