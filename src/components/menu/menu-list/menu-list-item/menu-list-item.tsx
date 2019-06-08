import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../../elements';
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
        <Element className={cn(className, { 'is-active': active })} {...props}>
          {child.props.title}
        </Element>
        {React.cloneElement(child, { title: null })}
      </li>
    );
  }
  return (
    <li>
      <Element className={cn(className, { 'is-active': active })} {...props}>
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
