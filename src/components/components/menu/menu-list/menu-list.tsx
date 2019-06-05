import cn from 'classnames';
import * as React from 'react';
import { Fragment } from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type MenuListProps = Partial<Modifiers> & {
  title?: string;
};

export const MenuList: React.FunctionComponent<MenuListProps> = ({ className, title, ...props }: MenuListProps) => (
  <Fragment>
    {title && <p className="menu-label">{title}</p>}
    <Element renderAs="ul" className={cn('menu-list', className)} {...props} />
  </Fragment>
);

MenuList.defaultProps = {
  ...modifiers.defaultProps
};
