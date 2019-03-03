import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { Tab } from './components/tab';

export const Tabs = React.forwardRef(({ children, className, align, size, type, fullWidth, ...props }, ref) => (
  <Element
    {...props}
    ref={ref}
    className={cn('tabs', className, {
      [`is-${align}`]: align,
      [`is-${size}`]: size,
      'is-toggle': type === 'toggle-rounded',
      [`is-${type}`]: type,
      'is-fullwidth': fullWidth
    })}
  >
    <ul>{children}</ul>
  </Element>
));

Tabs.Tab = Tab;

Tabs.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  align: PropTypes.oneOf(['centered', 'right']),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  type: PropTypes.oneOf(['toggle', 'boxed', 'toggle-rounded']),
  fullWidth: PropTypes.bool
};

Tabs.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div',
  fullWidth: false
};
