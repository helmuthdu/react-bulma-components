import clsx from 'clsx';
import { Display } from '../constants';

export type HelpersModifier = {
  clearfix?: boolean;
  clipped?: boolean;
  display?: Display;
  hidden?: boolean;
  invisible?: boolean;
  overlay?: boolean;
  pulled?: 'right' | 'left';
  radiusless?: boolean;
  relative?: boolean;
  scrolless?: boolean;
  shadowless?: boolean;
  unselectable?: boolean;
};

const modifier = {
  defaultProps: {
    clearfix: false,
    clipped: false,
    hidden: false,
    invisible: false,
    overlay: false,
    radiusless: false,
    relative: false,
    scrolless: false,
    shadowless: false,
    unselectable: false
  },
  getClassName: ({
    clearfix,
    clipped,
    display,
    hidden,
    invisible,
    overlay,
    pulled,
    radiusless,
    relative,
    scrolless,
    shadowless,
    unselectable
  }: HelpersModifier) =>
    clsx({
      'is-clearfix': clearfix,
      'is-clipped': clipped,
      'is-hidden': hidden,
      'is-invisible': invisible,
      'is-overlay': overlay,
      'is-radiusless': radiusless,
      'is-relative': relative,
      'is-scrolless': scrolless,
      'is-shadowless': shadowless,
      'is-unselectable': unselectable,
      [`is-${display}`]: display,
      [`is-pulled-${pulled}`]: pulled
    }),
  clean: ({
    clearfix,
    clipped,
    display,
    hidden,
    invisible,
    overlay,
    pulled,
    radiusless,
    relative,
    scrolless,
    shadowless,
    unselectable,
    ...props
  }: HelpersModifier) => props
};

export default modifier;
