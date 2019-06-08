import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';
import { MenuList } from './menu-list';

type MenuProps = ElementModifier;

export const Menu: React.FunctionComponent<MenuProps> & {
  List: typeof MenuList;
} = ({ className, ...props }: MenuProps) => <Element {...props} className={cn('menu', className)} />;

Menu.List = MenuList;

Menu.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'aside'
};
