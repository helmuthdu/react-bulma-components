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
        [`is-${size}`]: size,
        [`is-${color}`]: color,
        'is-loading': loading,
        'is-rounded': rounded,
        'is-empty': empty,
        'is-multiple': multiple
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
  readOnly: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Select.defaultProps = {
  ...modifiers.defaultProps,
  empty: false,
  loading: false,
  multiple: false,
  rounded: false,
  value: ''
};
