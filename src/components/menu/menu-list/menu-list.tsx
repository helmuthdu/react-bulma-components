import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';
import { MenuListItem } from './menu-list-item';

const { Fragment } = React;

type MenuListProps = ElementModifier & {
  title?: string;
} & Omit<React.ComponentProps<'ul'>, 'unselectable'>;

export const MenuList: React.FunctionComponent<MenuListProps> & {
  Item: typeof MenuListItem;
} = ({ className, title, ...props }: MenuListProps) => (
  <Fragment>
    {title && <p className="menu-label">{title}</p>}
    <Element as="ul" className={cn('menu-list', className)} {...props} />
  </Fragment>
);

MenuList.Item = MenuList;

MenuList.defaultProps = {
  ...modifiers.defaultProps
};
