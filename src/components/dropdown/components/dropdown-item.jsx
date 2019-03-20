import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const DropdownItem = ({ active, children, value, ...props }) => (
  <Element
    title={value}
    {...props}
    role="presentation"
    className={cn('dropdown-item', {
      'is-active': active
    })}
  >
    {children}
  </Element>
);

DropdownItem.propTypes = {
  ...modifiers.propTypes,
  active: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  value: PropTypes.any.isRequired
};

DropdownItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  onClick: () => {}
};
