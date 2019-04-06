import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../layout/element';

export const NavbarDivider = ({ className, ...props }) => (
  <Element {...props} className={cn('navbar-divider', className)} />
);

NavbarDivider.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  style: PropTypes.object
};

NavbarDivider.defaultProps = {
  ...modifiers.defaultProps
};
