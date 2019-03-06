import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { Tab } from './components/tab';

export const Tabs = ({ children, className, align, size, type, fullwidth, ...props }) => (
  <Element
    {...props}
    className={cn('tabs', className, {
      [`is-${align}`]: align,
      [`is-${size}`]: size,
      'is-toggle': type === 'toggle-rounded',
      [`is-${type}`]: type,
      'is-fullwidth': fullwidth
    })}
  >
    <ul>{children}</ul>
  </Element>
);

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
  fullwidth: PropTypes.bool
};

Tabs.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div',
  fullwidth: false
};
