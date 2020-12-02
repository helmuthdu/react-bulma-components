import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

export * from './button-group';

type ButtonProps = Omit<React.ComponentPropsWithRef<'a' | 'button' | 'span'>, 'unselectable'> &
  ElementModifier & {
    as?: ('a' | 'button' | 'span') | ((...args: any[]) => any);
    color?: Exclude<Colors, 'light'>;
    disabled?: boolean;
    fullwidth?: boolean;
    inactive?: boolean;
    inverted?: boolean;
    light?: boolean;
    link?: boolean;
    loading?: boolean;
    outlined?: boolean;
    remove?: boolean;
    reset?: boolean;
    rounded?: boolean;
    selected?: boolean;
    size?: Sizes | 'normal';
    state?: 'hover' | 'focus' | 'active' | 'loading';
    submit?: boolean;
    text?: boolean;
    type?: string;
  };

export const Button = React.forwardRef<HTMLAnchorElement | HTMLButtonElement | HTMLSpanElement, ButtonProps>(
  (
    {
      as,
      children,
      className,
      color,
      disabled,
      fullwidth,
      inactive,
      inverted,
      light,
      link,
      loading,
      onChange,
      onClick,
      outlined,
      remove,
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
    const buttonType: { type?: string } = {};

    if (submit) {
      Element = 'button';
      buttonType.type = 'submit';
    }

    if (reset) {
      Element = 'button';
      buttonType.type = 'reset';
    }

    return (
      <Element
        ref={ref}
        tabIndex={disabled ? -1 : 0}
        disabled={disabled}
        onClick={disabled ? undefined : onClick}
        onChange={disabled ? undefined : onChange}
        className={clsx(
          {
            'is-fullwidth': fullwidth,
            'is-inverted': inverted,
            'is-light': light,
            'is-link': link,
            'is-loading': loading,
            'is-outlined': outlined,
            'is-rounded': rounded,
            'is-selected': selected,
            'is-static': inactive,
            'is-text': text,
            [`is-${color}`]: color,
            [`is-${size}`]: size,
            [`is-${state}`]: state,
            button: !remove,
            delete: remove
          },
          className
        )}
        {...buttonType}
        {...props}>
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

Button.displayName = 'Button';
