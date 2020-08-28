import clsx from 'clsx';

export type HelpersModifier = {
  clearfix?: boolean;
  clipped?: boolean;
  hidden?: boolean;
  invisible?: boolean;
  overlay?: boolean;
  pull?: 'right' | 'left';
  radiusless?: boolean;
  relative?: boolean;
  scrolless?: boolean;
  shadowless?: boolean;
  unselectable?: boolean;
};

export default {
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
  getClassName: (props: HelpersModifier) =>
    clsx({
      'is-clearfix': props.clearfix,
      'is-clipped': props.clipped,
      'is-hidden': props.hidden,
      'is-invisible': props.invisible,
      'is-overlay': props.overlay,
      'is-radiusless': props.radiusless,
      'is-relative': props.relative,
      'is-scrolless': props.scrolless,
      'is-shadowless': props.shadowless,
      'is-unselectable': props.unselectable,
      [`is-pulled-${props.pull}`]: props.pull
    }),
  clean: ({
    clearfix,
    clipped,
    hidden,
    invisible,
    overlay,
    pull,
    radiusless,
    relative,
    scrolless,
    shadowless,
    unselectable,
    ...props
  }: HelpersModifier) => props
};
