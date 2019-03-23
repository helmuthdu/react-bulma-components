import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

export const Switch = ({ className, style, disabled, value, children, checked, color, size, name, ...allProps }) => {
  const props = modifiers.clean(allProps);
  const [isMouseDown, setMouseDown] = useState(false);
  return (
    <label
      data-testid="switch-label"
      className={cn('switch', modifiers.getClassName(allProps), className)}
      disabled={disabled}
      onMouseDown={() => setMouseDown(true)}
      onMouseOut={() => setMouseDown(false)}
      onMouseUp={() => setMouseDown(false)}
      style={style}
    >
      <input
        {...props}
        data-testid="switch-input"
        checked={checked}
        disabled={disabled}
        name={name}
        type="checkbox"
        value={value}
      />
      <span
        data-testid="switch-check"
        className={cn('check', {
          'is-elastic': isMouseDown && !disabled,
          [`is-${color}`]: color,
          [`is-${size}`]: size
        })}
      />
      <span className="control-label">{children}</span>
    </label>
  );
};

Switch.propTypes = {
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

Switch.defaultProps = {
  ...modifiers.defaultProps,
  checked: false
};
