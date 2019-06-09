import cn from 'classnames';
import * as React from 'react';
import { Colors } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';
import { ShowContext } from './context';
import { NavbarBrand } from './navbar-brand';
import { NavbarBurger } from './navbar-burger';
import { NavbarContainer } from './navbar-container';
import { NavbarDivider } from './navbar-divider';
import { NavbarDropdown } from './navbar-dropdown';
import { NavbarItem } from './navbar-item';
import { NavbarLink } from './navbar-link';
import { NavbarMenu } from './navbar-menu';

type NavbarProps = ElementModifier & {
  active?: boolean;
  color?: Colors;
  fixed?: null | 'top' | 'bottom';
  transparent?: boolean;
} & Omit<React.ComponentProps<'nav'>, 'color' | 'unselectable'>;

export const Navbar: React.FunctionComponent<NavbarProps> & {
  Brand: typeof NavbarBrand;
  Burger: typeof NavbarBurger;
  Container: typeof NavbarContainer;
  Divider: typeof NavbarDivider;
  Dropdown: typeof NavbarDropdown;
  Item: typeof NavbarItem;
  Link: typeof NavbarLink;
  Menu: typeof NavbarMenu;
} = ({ children, className, fixed, transparent, color, active, ...props }: NavbarProps) => {
  return (
    // @ts-ignore
    <ShowContext.Provider value={active}>
      <Element
        className={cn('navbar', modifiers.getClassName(props), className, {
          'is-transparent': transparent,
          [`is-fixed-${fixed}`]: fixed,
          [`is-${color}`]: color
        })}
        {...props}
      >
        {children}
      </Element>
    </ShowContext.Provider>
  );
};

Navbar.Brand = NavbarBrand;
Navbar.Burger = NavbarBurger;
Navbar.Container = NavbarContainer;
Navbar.Divider = NavbarDivider;
Navbar.Dropdown = NavbarDropdown;
Navbar.Item = NavbarItem;
Navbar.Link = NavbarLink;
Navbar.Menu = NavbarMenu;

Navbar.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  as: 'nav',
  transparent: false
};
