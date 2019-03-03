import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

export const Textarea = React.forwardRef(
  ({ className, size, color, readOnly, disabled, placeholder, rows, value, name, ...allProps }, ref) => {
    const props = modifiers.clean(allProps);
    return (
      <textarea
        name={name}
        {...props}
        ref={ref}
        value={value}
        rows={rows}
        placeholder={placeholder}
        readOnly={readOnly}
        disabled={disabled}
        className={cn('textarea', modifiers.getClassName(allProps), className, {
          [`is-${size}`]: size,
          [`is-${color}`]: color
        })}
      />
    );
  }
);

Textarea.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  color: PropTypes.oneOf(colors),
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
  value: PropTypes.string,
  name: PropTypes.string
};

Textarea.defaultProps = {
  ...modifiers.defaultProps,
  rows: 4,
  value: ''
};
