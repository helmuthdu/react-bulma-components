import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

export const Tab = ({ children, className, style, active, ...props }) => (
  <li
    style={style}
    className={cn(className, {
      'is-active': active
    })}
  >
    <Element {...props}>{children}</Element>
  </li>
);

Tab.propTypes = {
  ...modifiers.propTypes,
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object
};

Tab.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  renderAs: 'a'
};
