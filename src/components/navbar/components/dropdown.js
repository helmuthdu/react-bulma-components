import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const NavbarDropdown = ({ className, boxed, right, children, ...props }) => (
  <Element
    {...props}
    className={cn('navbar-dropdown', className, {
      'is-boxed': boxed,
      'is-right': right
    })}
  >
    {children}
  </Element>
);

NavbarDropdown.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  boxed: PropTypes.bool,
  right: PropTypes.bool
};

NavbarDropdown.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'span',
  boxed: false,
  right: false
};
