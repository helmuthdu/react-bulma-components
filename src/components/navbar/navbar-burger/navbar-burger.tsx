import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';
import { ShowContext } from '../context';

type NavbarBurgerProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const NavbarBurger = React.forwardRef<HTMLButtonElement, NavbarBurgerProps>(
  ({ className, style, ...props }, ref) => (
    <ShowContext.Consumer>
      {active => (
        <Element
          ref={ref}
          role="button"
          tabIndex="0"
          style={{ outline: 'none', ...style }}
          className={clsx(
            'navbar-burger',
            {
              'is-active': active
            },
            className
          )}
          {...props}>
          <span />
          <span />
          <span />
        </Element>
      )}
    </ShowContext.Consumer>
  )
);

NavbarBurger.defaultProps = {
  ...modifiers.defaultProps
};

NavbarBurger.displayName = 'NavbarBurger';
