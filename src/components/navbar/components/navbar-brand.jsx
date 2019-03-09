import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const NavbarBrand = ({ className, children, ...props }) => (
  <Element {...props} className={cn('navbar-brand', className)}>
    {children}
  </Element>
);

NavbarBrand.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node
};

NavbarBrand.defaultProps = {
  ...modifiers.defaultProps
};
