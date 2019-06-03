import cn from 'classnames';
import React, { Fragment } from 'react';
import modifiers from '../../../../../modifiers';
import { Element } from '../../../../elements';
import { MenuListItem } from './components/menu-list-item';

type MenuListProps = {
  className?: string;
  title?: React.ReactNode;
};
export const MenuList: React.FunctionComponent<MenuListProps> = ({ className, title, ...props }: any) => (
  <Fragment>
    {title && <p className="menu-label">{title}</p>}
    <Element renderAs="ul" className={cn('menu-list', className)} {...props} />
  </Fragment>
);
MenuList.Item = MenuListItem;
MenuList.defaultProps = {
  ...modifiers.defaultProps
};
