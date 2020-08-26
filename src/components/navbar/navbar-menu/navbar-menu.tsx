import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';
import { ShowContext } from '../context';

type NavbarMenuProps = ElementModifier;

export const NavbarMenu = React.forwardRef<HTMLDivElement, NavbarMenuProps>(
  ({ className, children, ...props }, ref) => (
    <ShowContext.Consumer>
      {active => (
        <Element
          ref={ref}
          {...props}
          className={clsx('navbar-menu', className, {
            'is-active': active
          })}>
          {children}
        </Element>
      )}
    </ShowContext.Consumer>
  )
);

NavbarMenu.defaultProps = {
  ...modifiers.defaultProps
};
