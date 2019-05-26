import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

export const Select = ({
  children,
  className,
  color,
  disabled,
  empty,
  loading,
  multiple,
  name,
  readOnly,
  rounded,
  size,
  style,
  value,
  ...allProps
}) => {
  const props = modifiers.clean(allProps);
  return (
    <div
      className={cn('select', modifiers.getClassName(allProps), className, {
        'is-empty': empty,
        'is-loading': loading,
        'is-multiple': multiple,
        'is-rounded': rounded,
        [`is-${color}`]: color,
        [`is-${size}`]: size
      })}
      style={style}
    >
      <select {...props} multiple={multiple} value={value} aria-readonly={readOnly} disabled={disabled} name={name}>
        {children}
      </select>
    </div>
  );
};

Select.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  disabled: PropTypes.bool,
  empty: PropTypes.bool,
  loading: PropTypes.bool,
  multiple: PropTypes.bool,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  readOnly: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array])
};

Select.defaultProps = {
  ...modifiers.defaultProps,
  empty: false,
  loading: false,
  multiple: false,
  rounded: false,
  value: ''
};
