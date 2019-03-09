import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const NavbarDivider = ({ className, ...props }) => (
  <Element {...props} className={cn('navbar-divider', className)} />
);

NavbarDivider.propTypes = {
  ...modifiers.propTypes,
  style: PropTypes.object,
  className: PropTypes.string
};

NavbarDivider.defaultProps = {
  ...modifiers.defaultProps
};
