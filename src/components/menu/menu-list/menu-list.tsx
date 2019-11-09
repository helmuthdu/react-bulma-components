import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';
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
    <Element as="ul" className={clsx('menu-list', className)} {...props} />
  </Fragment>
);

MenuList.Item = MenuList;

MenuList.defaultProps = {
  ...modifiers.defaultProps
};
