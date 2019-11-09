import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';
import { MenuList } from './menu-list';

type MenuProps = ElementModifier;

export const Menu: React.FunctionComponent<MenuProps> & {
  List: typeof MenuList;
} = ({ className, ...props }: MenuProps) => <Element {...props} className={clsx('menu', className)} />;

Menu.List = MenuList;

Menu.defaultProps = {
  ...modifiers.defaultProps,
  as: 'aside'
};
