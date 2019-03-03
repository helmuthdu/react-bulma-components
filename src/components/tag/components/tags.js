import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';

export const Tags = React.forwardRef(({ children, className, gapless, size, ...allProps }, ref) => {
  const props = modifiers.clean(allProps);
  return (
    <span
      {...props}
      ref={ref}
      className={cn('tags', modifiers.getClassName(allProps), className, {
        'has-addons': gapless,
        [`are-${size}`]: size
      })}
    >
      {children}
    </span>
  );
});

Tags.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  gapless: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large']),
  style: PropTypes.object
};

Tags.defaultProps = {
  ...modifiers.defaultProps,
  gapless: false
};
