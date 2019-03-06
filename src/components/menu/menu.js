import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { MenuList } from './components/list';

export const Menu = ({ className, ...props }) => <Element {...props} className={cn('menu', className)} />;

Menu.List = MenuList;

Menu.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

Menu.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'aside'
};
