import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';

export const Label = ({ children, className, size, ...allProps }) => {
  const props = modifiers.clean(allProps);
  return (
    <label
      {...props}
      className={cn('label', modifiers.getClassName(allProps), className, {
        [`is-${size}`]: size
      })}
    >
      {children}
    </label>
  );
};

Label.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object
};

Label.defaultProps = {
  ...modifiers.defaultProps,
  htmlFor: null
};
