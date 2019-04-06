import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../layout/element';

export const NavbarBrand = ({ className, children, ...props }) => (
  <Element {...props} className={cn('navbar-brand', className)}>
    {children}
  </Element>
);

NavbarBrand.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

NavbarBrand.defaultProps = {
  ...modifiers.defaultProps
};
