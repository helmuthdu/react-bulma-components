import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const NavbarLink = React.forwardRef(({ className, children, ...props }, ref) => (
  <Element {...props} ref={ref} className={cn('navbar-link', className)}>
    {children}
  </Element>
));

NavbarLink.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.node,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

NavbarLink.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'span'
};
