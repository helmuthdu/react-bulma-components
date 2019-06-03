import cn from 'classnames';
import * as React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type NavbarItemProps = Partial<Modifiers> & {
  active?: boolean;
  dropdown?: boolean;
  dropdownUp?: boolean;
  hoverable?: boolean;
};

export const NavbarItem: React.FunctionComponent<NavbarItemProps> = ({
  className,
  active,
  children,
  dropdown,
  dropdownUp,
  hoverable,
  renderAs,
  ...props
}: NavbarItemProps) => {
  let as = renderAs;

  if (dropdown && renderAs === 'a') {
    as = 'span';
  }

  return (
    <Element
      {...props}
      renderAs={as}
      className={cn('navbar-item', className, {
        'has-dropdown': dropdown,
        'has-dropdown-up': dropdownUp,
        'is-active': active,
        'is-hoverable': hoverable
      })}
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
  renderAs: 'a'
};
