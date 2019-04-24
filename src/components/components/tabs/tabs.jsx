import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../../elements';
import { Tab } from './components/tab';

export const Tabs = ({ children, className, align, size, type, fullwidth, ...props }) => (
  <Element
    {...props}
    className={cn('tabs', className, {
      'is-fullwidth': fullwidth,
      'is-toggle': type === 'toggle-rounded',
      [`is-${align}`]: align,
      [`is-${size}`]: size,
      [`is-${type}`]: type
    })}
  >
    <ul>{children}</ul>
  </Element>
);

Tabs.Tab = Tab;

Tabs.propTypes = {
  ...modifiers.propTypes,
  align: PropTypes.oneOf(['centered', 'right']),
  children: PropTypes.node,
  className: PropTypes.string,
  fullwidth: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object,
  type: PropTypes.oneOf(['toggle', 'boxed', 'toggle-rounded'])
};

Tabs.defaultProps = {
  ...modifiers.defaultProps,
  fullwidth: false,
  renderAs: 'div'
};
