import cn from 'classnames';
import * as React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';
import { ShowContext } from '../context';

type NavbarMenuProps = Partial<Modifiers>;

export const NavbarMenu: React.FunctionComponent<NavbarMenuProps> = ({
  className,
  children,
  ...props
}: NavbarMenuProps) => (
  <ShowContext.Consumer>
    {active => (
      <Element
        {...props}
        className={cn('navbar-menu', className, {
          'is-active': active
        })}
      >
        {children}
      </Element>
    )}
  </ShowContext.Consumer>
);

NavbarMenu.defaultProps = {
  ...modifiers.defaultProps
};
