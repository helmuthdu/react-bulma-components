import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';
import { ShowContext } from './context';

type NavbarProps = Omit<React.ComponentPropsWithRef<'nav'>, 'unselectable'> &
  ElementModifier & {
    active?: boolean;
    color?: Colors;
    fixed?: null | 'top' | 'bottom';
    transparent?: boolean;
  };

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  ({ children, className, fixed, transparent, color, active, ...props }, ref) => {
    return (
      <ShowContext.Provider value={active as boolean}>
        <Element
          ref={ref}
          className={clsx('navbar', className, {
            'is-transparent': transparent,
            [`is-fixed-${fixed}`]: fixed,
            [`is-${color}`]: color
          })}
          {...props}>
          {children}
        </Element>
      </ShowContext.Provider>
    );
  }
);

Navbar.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  as: 'nav',
  transparent: false
};

Navbar.displayName = 'Navbar';
