import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';
import { MenuList } from './components/menu-list';

type MenuProps = Partial<Modifiers>;

export const Menu: React.FunctionComponent<MenuProps> = ({ className, ...props }: MenuProps) => (
  <Element {...props} className={cn('menu', className)} />
);

(Menu as any).List = MenuList;

Menu.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'aside'
};
