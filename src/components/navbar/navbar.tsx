import cn from 'classnames';
import * as React from 'react';
import { Colors, isServer } from '../../constants';
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

const { useEffect } = React;

type NavbarProps = ElementModifier & {
  active?: boolean;
  color?: Colors;
  fixed?: null | 'top' | 'bottom';
  transparent?: boolean;
};

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
  // @ts-ignore
  useEffect(() => {
    if (isServer) {
      return;
    }

    const html = window.document.querySelector('html') as HTMLElement;
    html.classList.remove('has-navbar-fixed-top');
    html.classList.remove('has-navbar-fixed-bottom');

    if (fixed) {
      html.classList.add(`has-navbar-fixed-${fixed}`);
    }

    return () => {
      html.classList.remove(`has-navbar-fixed-${fixed}`);
    };
  });

  return (
    // @ts-ignore
    <ShowContext.Provider value={active}>
      <Element
        {...props}
        className={cn('navbar', modifiers.getClassName(props), className, {
          'is-transparent': transparent,
          [`is-fixed-${fixed}`]: fixed,
          [`is-${color}`]: color
        })}
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
  renderAs: 'nav',
  transparent: false
};
