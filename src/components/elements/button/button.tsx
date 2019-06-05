import cn from 'classnames';
import React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';

export * from './button-group';

type ButtonProps = Partial<Omit<React.ComponentProps<'a' | 'button' | 'span'>, 'color' | 'unselectable'>> &
  ElementModifier & {
    color?: Colors;
    disabled?: boolean;
    fullwidth?: boolean;
    inactive?: boolean;
    inverted?: boolean;
    link?: boolean;
    loading?: boolean;
    onClick?: (...args: any[]) => void;
    onChange?: (...args: any[]) => void;
    onMouseEnter?: (...args: any[]) => void;
    outlined?: boolean;
    remove?: boolean;
    renderAs?: ('a' | 'button' | 'span') | ((...args: any[]) => any);
    reset?: boolean;
    rounded?: boolean;
    selected?: boolean;
    size?: 'normal' | Sizes;
    state?: 'hover' | 'focus' | 'active' | 'loading';
    submit?: boolean;
    text?: boolean;
    type?: string;
  };

export const Button: React.FunctionComponent<ButtonProps> = ({
  children,
  className,
  color,
  disabled,
  fullwidth,
  inactive,
  inverted,
  loading,
  onClick,
  onChange,
  outlined,
  remove,
  renderAs,
  reset,
  rounded,
  selected,
  size,
  state,
  submit,
  text,
  ...allProps
}: ButtonProps) => {
  let Element: any = inactive ? 'span' : renderAs;
  const props = modifiers.clean(allProps);
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
      tabIndex={disabled ? -1 : 0}
      {...props}
      {...otherProps}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onChange={disabled ? undefined : onChange}
      className={cn(className, modifiers.getClassName(allProps), {
        'is-fullwidth': fullwidth,
        'is-inverted': inverted,
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
      })}
    >
      {children}
    </Element>
  );
};

Button.defaultProps = {
  ...modifiers.defaultProps,
  fullwidth: false,
  inactive: false,
  inverted: false,
  loading: false,
  outlined: false,
  remove: false,
  renderAs: 'button',
  reset: false,
  rounded: false,
  selected: false,
  submit: false,
  text: false
};
