import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { ButtonGroup } from './components';

const colors = Object.values(CONSTANTS.COLORS);

export const Button = ({
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
}) => {
  let Element = inactive ? 'span' : renderAs;
  const props = modifiers.clean(allProps);
  const otherProps = {};

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

Button.Group = ButtonGroup;

Button.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  disabled: PropTypes.bool,
  fullwidth: PropTypes.bool,
  inactive: PropTypes.bool,
  inverted: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
  outlined: PropTypes.bool,
  remove: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.oneOf(['a', 'button', 'span']), PropTypes.func]),
  reset: PropTypes.bool,
  rounded: PropTypes.bool,
  selected: PropTypes.bool,
  size: PropTypes.oneOf(['normal', ...Object.values(CONSTANTS.SIZES)]),
  state: PropTypes.oneOf(['hover', 'focus', 'active', 'loading']),
  style: PropTypes.object,
  submit: PropTypes.bool,
  text: PropTypes.bool
};

Button.defaultProps = {
  ...modifiers.defaultProps,
  fullwidth: false,
  inactive: false,
  inverted: false,
  loading: false,
  outlined: false,
  onClick: () => {},
  remove: false,
  renderAs: 'button',
  reset: false,
  rounded: false,
  selected: false,
  submit: false,
  text: false
};
