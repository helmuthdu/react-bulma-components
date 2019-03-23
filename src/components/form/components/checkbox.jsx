import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

export const Checkbox = ({
  checked,
  children,
  className,
  color,
  disabled,
  indeterminate,
  name,
  size,
  style,
  value,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <label
      data-testid="checkbox-label"
      className={cn('b-checkbox checkbox', modifiers.getClassName(allProps), className)}
      disabled={disabled}
      style={style}
    >
      <input
        {...props}
        data-testid="checkbox-input"
        checked={checked}
        disabled={disabled}
        indeterminate={indeterminate}
        name={name}
        type="checkbox"
        value={value}
      />
      <span
        data-testid="checkbox-check"
        className={cn('check', {
          [`is-${color}`]: color,
          [`is-${size}`]: size
        })}
      />
      <span className="control-label">{children}</span>
    </label>
  );
};

Checkbox.propTypes = {
  ...modifiers.propTypes,
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Checkbox.defaultProps = {
  ...modifiers.defaultProps,
  checked: false,
  indeterminate: false
};
