import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { MenuList } from '../menu-list';

type MenuListItemProps = ElementModifier & {
  active?: boolean;
};

export const MenuListItem: React.FunctionComponent<MenuListItemProps> = ({
  children,
  active,
  className,
  ...props
}: MenuListItemProps) => {
  if (
    children &&
    typeof children !== 'string' &&
    React.Children.toArray(children).length === 1 &&
    // @ts-ignore
    React.Children.only(children).type === MenuList
  ) {
    const child: any = React.Children.only(children);
    return (
      <li>
        <Element className={clsx(className, { 'is-active': active })} {...props}>
          {child.props.title}
        </Element>
        {React.cloneElement(child, { title: null })}
      </li>
    );
  }
  return (
    <li>
      <Element className={clsx(className, { 'is-active': active })} {...props}>
        {children}
      </Element>
    </li>
  );
};

MenuListItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  as: 'a'
};
