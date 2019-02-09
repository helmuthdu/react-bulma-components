import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

export const Radio = React.forwardRef(
  ({ className, style, disabled, value, children, checked, color, size, name, ...allProps }, ref) => {
    const props = modifiers.clean(allProps);
    return (
      <label
        disabled={disabled}
        className={cn('b-radio radio', modifiers.getClassName(allProps), className)}
        style={style}
      >
        <input {...props} ref={ref} name={name} type="radio" value={value} disabled={disabled} checked={checked} />
        <span
          className={cn('check', {
            [`is-${color}`]: color,
            [`is-${size}`]: size
          })}
        />
        <span className="control-label">{children}</span>
      </label>
    );
  }
);

Radio.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.shape({}),
  color: PropTypes.oneOf(colors),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  disabled: PropTypes.bool,
  value: PropTypes.string,
  checked: PropTypes.bool,
  /**
   * The name of the input field Commonly used for [multi-input handling](https://reactjs.org/docs/forms.html#handling-multiple-inputs)
   */
  name: PropTypes.string
};

Radio.defaultProps = {
  ...modifiers.defaultProps,
  children: null,
  className: '',
  value: '',
  style: {},
  color: null,
  size: null,
  disabled: false,
  checked: false,
  name: null
};
