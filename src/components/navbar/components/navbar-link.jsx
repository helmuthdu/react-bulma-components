import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const NavbarLink = ({ className, children, ...props }) => (
  <Element {...props} className={cn('navbar-link', className)}>
    {children}
  </Element>
);

NavbarLink.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object
};

NavbarLink.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'span'
};
