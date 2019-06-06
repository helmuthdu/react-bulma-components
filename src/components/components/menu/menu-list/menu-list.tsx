import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../elements';
import { MenuListItem } from './menu-list-item';

const { Fragment } = React;

type MenuListProps = Partial<Omit<React.ComponentProps<'ul'>, 'unselectable'>> &
  ElementModifier & {
    title?: string;
  };

export const MenuList: React.FunctionComponent<MenuListProps> & {
  Item: typeof MenuListItem;
} = ({ className, title, ...props }: MenuListProps) => (
  <Fragment>
    {title && <p className="menu-label">{title}</p>}
    <Element renderAs="ul" className={cn('menu-list', className)} {...props} />
  </Fragment>
);

MenuList.Item = MenuList;

MenuList.defaultProps = {
  ...modifiers.defaultProps
};
