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

export type BreakpointsSize = { [key in Breakpoints]?: BreakpointSize };

export type ResponsiveModifier = BreakpointsSize;

const getValue = (val: any | DisplayWithOnly | HiddenWithOnly | SpacingWithOnly) => val?.only ?? val;
const getOnly = (val: any | DisplayWithOnly | HiddenWithOnly | SpacingWithOnly) => (val?.only ? '-only' : '');
const getSizeClassFromProp = (sizes?: BreakpointsSize) =>
  sizes
    ? Object.entries(sizes)
        .filter(([, values]) => values)
        .reduce(
          (classes, [breakpoint, { display, gap, hidden, textAlignment, textSize }]: [string, any]) => ({
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
