import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';
import { ShowContext } from '../context';

type NavbarMenuProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const NavbarMenu = React.forwardRef<HTMLDivElement, NavbarMenuProps>(
  ({ className, children, ...props }, ref) => (
    <ShowContext.Consumer>
      {active => (
        <Element
          ref={ref}
          className={clsx(
            'navbar-menu',
            {
              'is-active': active
            },
            className
          )}
          {...props}>
          {children}
        </Element>
      )}
    </ShowContext.Consumer>
  )
);

NavbarMenu.defaultProps = {
  ...modifiers.defaultProps
};

NavbarMenu.displayName = 'NavbarMenu';
