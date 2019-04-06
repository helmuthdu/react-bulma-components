import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../layout/element';

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
  boxed: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  right: PropTypes.bool,
  style: PropTypes.object
};

NavbarDropdown.defaultProps = {
  ...modifiers.defaultProps,
  boxed: false,
  renderAs: 'span',
  right: false
};
