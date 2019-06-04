import cn from 'classnames';
import React, { Fragment } from 'react';
import modifiers, { Modifiers } from '../../../../../modifiers';
import { Element } from '../../../../elements';
import { MenuListItem } from './components/menu-list-item';

type MenuListProps = Partial<Modifiers> & {
  title?: React.ReactNode;
};

export const MenuList: React.FunctionComponent<MenuListProps> = ({ className, title, ...props }: MenuListProps) => (
  <Fragment>
    {title && <p className="menu-label">{title}</p>}
    <Element renderAs="ul" className={cn('menu-list', className)} {...props} />
  </Fragment>
);

(MenuList as any).Item = MenuListItem;

MenuList.defaultProps = {
  ...modifiers.defaultProps
};
