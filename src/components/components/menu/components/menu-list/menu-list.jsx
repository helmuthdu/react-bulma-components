import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import modifiers from '../../../../../modifiers';
import { Element } from '../../../../elements';
import { MenuListItem } from './components/menu-list-item';

export const MenuList = ({ className, title, ...props }) => (
  <Fragment>
    {title && <p className="menu-label">{title}</p>}
    <Element renderAs="ul" className={cn('menu-list', className)} {...props} />
  </Fragment>
);

MenuList.Item = MenuListItem;

MenuList.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  title: PropTypes.node
};

MenuList.defaultProps = {
  ...modifiers.defaultProps
};
