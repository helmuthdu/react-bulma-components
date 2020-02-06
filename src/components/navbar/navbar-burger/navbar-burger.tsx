import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';
import { ShowContext } from '../context';

type NavbarBurgerProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const NavbarBurger = React.forwardRef<HTMLButtonElement, NavbarBurgerProps>(
  ({ style, className, ...props }, ref) => (
    <ShowContext.Consumer>
      {active => (
        <Element
          ref={ref}
          role="button"
          tabIndex="0"
          style={{ outline: 'none', ...style }}
          className={clsx('navbar-burger', modifiers.getClassName(props), className, {
            'is-active': active
          })}
          {...modifiers.clean(props)}
        >
          <span />
          <span />
          <span />
        </Element>
      )}
    </ShowContext.Consumer>
  )
);

NavbarBurger.defaultProps = {
  ...modifiers.defaultProps,
  onClick: () => {}
};
