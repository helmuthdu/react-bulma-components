import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

export * from './button-group';

type ButtonProps = ElementModifier & {
  color?: Colors;
  disabled?: boolean;
  fullwidth?: boolean;
  inactive?: boolean;
  inverted?: boolean;
  link?: boolean;
  loading?: boolean;
  outlined?: boolean;
  remove?: boolean;
  as?: ('a' | 'button' | 'span') | ((...args: any[]) => any);
  reset?: boolean;
  rounded?: boolean;
  selected?: boolean;
  size?: Sizes | 'normal';
  state?: 'hover' | 'focus' | 'active' | 'loading';
  submit?: boolean;
  text?: boolean;
  type?: string;
} & Omit<React.ComponentProps<'a' | 'button' | 'span'>, 'ref' | 'color' | 'size' | 'unselectable'>;

export const Button = React.forwardRef<HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement, ButtonProps>(
  (
    {
      children,
      className,
      color,
      disabled,
      fullwidth,
      inactive,
      inverted,
      link,
      loading,
      onClick,
      onChange,
      outlined,
      remove,
      as,
      reset,
      rounded,
      selected,
      size,
      state,
      submit,
      text,
      ...props
    },
    ref
  ) => {
    let Element: any = inactive ? 'span' : as;
    const otherProps: any = {};

    if (submit) {
      Element = 'button';
      otherProps.type = 'submit';
    }

    if (reset) {
      Element = 'button';
      otherProps.type = 'reset';
    }

    return (
      <Element
        ref={ref}
        tabIndex={disabled ? -1 : 0}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        onChange={disabled ? undefined : onChange}
        className={clsx(className, modifiers.getClassName(props), {
          'is-fullwidth': fullwidth,
          'is-inverted': inverted,
          'is-loading': loading,
          'is-outlined': outlined,
          'is-rounded': rounded,
          'is-selected': selected,
          'is-static': inactive,
          'is-text': text,
          'is-link': link,
          [`is-${color}`]: color,
          [`is-${size}`]: size,
          [`is-${state}`]: state,
          button: !remove,
          delete: remove
        })}
        {...modifiers.clean(props)}
        {...otherProps}
      >
        {children}
      </Element>
    );
  }
);

Button.defaultProps = {
  ...modifiers.defaultProps,
  fullwidth: false,
  inactive: false,
  inverted: false,
  loading: false,
  outlined: false,
  remove: false,
  as: 'button',
  reset: false,
  rounded: false,
  selected: false,
  submit: false,
  text: false
};
