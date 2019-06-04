import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../../modifiers';
import { Element } from '../../../../../elements';
import { MenuList } from '../menu-list';

type MenuListItemProps = Partial<Modifiers> & {
  active?: boolean;
};

export const MenuListItem: React.FunctionComponent<MenuListItemProps> = ({
  children,
  active,
  className,
  ...props
}: any) => {
  if (
    typeof children !== 'string' &&
    React.Children.toArray(children).length === 1 &&
    React.Children.only(children).type === MenuList
  ) {
    const child = React.Children.only(children);
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
  renderAs: 'a'
};
