import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type NavbarItemProps = ElementModifier & {
  active?: boolean;
  dropdown?: boolean;
  dropdownUp?: boolean;
  hoverable?: boolean;
} & Omit<React.ComponentProps<'a'>, 'unselectable'>;

export const NavbarItem: React.FunctionComponent<NavbarItemProps> = ({
  className,
  active,
  children,
  dropdown,
  dropdownUp,
  hoverable,
  as,
  ...props
}: NavbarItemProps) => {
  return (
    <Element
      as={dropdown && as === 'a' ? 'span' : as}
      className={cn('navbar-item', className, {
        'has-dropdown': dropdown,
        'has-dropdown-up': dropdownUp,
        'is-active': active,
        'is-hoverable': hoverable
      })}
      {...props}
    >
      {children}
    </Element>
  );
};

NavbarItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  dropdown: false,
  dropdownUp: false,
  hoverable: false,
  as: 'a'
};
