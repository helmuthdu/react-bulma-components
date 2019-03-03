import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

export const Checkbox = React.forwardRef(
  ({ className, style, disabled, value, children, checked, color, size, indeterminate, name, ...allProps }, ref) => {
    const props = modifiers.clean(allProps);
    return (
      <label
        disabled={disabled}
        className={cn('b-checkbox checkbox', modifiers.getClassName(allProps), className)}
        style={style}
        data-testid="checkbox-label"
      >
        <input
          {...props}
          ref={ref}
          name={name}
          type="checkbox"
          value={value}
          disabled={disabled}
          checked={checked}
          indeterminate={indeterminate}
          data-testid="checkbox-input"
        />
        <span
          className={cn('check', {
            [`is-${color}`]: color,
            [`is-${size}`]: size
          })}
          data-testid="checkbox-check"
        />
        <span className="control-label">{children}</span>
      </label>
    );
  }
);

Checkbox.propTypes = {
  ...modifiers.propTypes,
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  name: PropTypes.string,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object,
  value: PropTypes.string
};

Checkbox.defaultProps = {
  ...modifiers.defaultProps,
  checked: false,
  indeterminate: false,
  value: ''
};
