import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';
import { ShowContext } from '../context';

type NavbarMenuProps = ElementModifier;

export const NavbarMenu: React.FunctionComponent<NavbarMenuProps> = ({
  className,
  children,
  ...props
}: NavbarMenuProps) => (
  <ShowContext.Consumer>
    {active => (
      <Element
        {...props}
        className={clsx('navbar-menu', className, {
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
