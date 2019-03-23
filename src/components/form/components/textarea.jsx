import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

export const Textarea = ({
  className,
  color,
  disabled,
  name,
  placeholder,
  readOnly,
  rows,
  size,
  value,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <textarea
      {...props}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      rows={rows}
      value={value}
      className={cn('textarea', modifiers.getClassName(allProps), className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size
      })}
    />
  );
};
Textarea.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  readOnly: PropTypes.bool,
  rows: PropTypes.number,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Textarea.defaultProps = {
  ...modifiers.defaultProps,
  rows: 4
};
