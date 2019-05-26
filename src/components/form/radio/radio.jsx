import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

export const Radio = ({ className, style, disabled, value, children, checked, color, size, name, ...allProps }) => {
  const props = modifiers.clean(allProps);
  return (
    <label
      data-testid="radio-label"
      disabled={disabled}
      className={cn('b-radio radio', modifiers.getClassName(allProps), className)}
      style={style}
    >
      <input
        {...props}
        data-testid="radio-input"
        name={name}
        type="radio"
        value={value}
        disabled={disabled}
        checked={checked}
      />
      <span
        data-testid="radio-check"
        className={cn('check', {
          [`is-${color}`]: color,
          [`is-${size}`]: size
        })}
      />
      <span className="control-label">{children}</span>
    </label>
  );
};

Radio.propTypes = {
  ...modifiers.propTypes,
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Radio.defaultProps = {
  ...modifiers.defaultProps,
  checked: false
};
