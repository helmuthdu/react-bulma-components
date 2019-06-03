import cn from 'classnames';
import React, { useEffect } from 'react';
import { Colors, IS_CLIENT } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';
import {
  NavbarBrand,
  NavbarBurger,
  NavbarContainer,
  NavbarDivider,
  NavbarDropdown,
  NavbarItem,
  NavbarLink,
  NavbarMenu
} from './components';
import { ShowContext } from './context';

let htmlClass = '';

export const getHtmlClasses = () => htmlClass;

type NavbarProps = Partial<Modifiers> & {
  active?: boolean;
  color?: Colors;
  fixed?: 'top' | 'bottom';
  transparent?: boolean;
};

export const Navbar: React.FunctionComponent<NavbarProps> = ({
  children,
  className,
  fixed,
  transparent,
  color,
  active,
  ...props
}: NavbarProps) => {
  // @ts-ignore
  useEffect(() => {
    if (!IS_CLIENT) {
      return null;
    }

    const html = window.document.querySelector('html') as HTMLElement;
    html.classList.remove('has-navbar-fixed-top');
    html.classList.remove('has-navbar-fixed-bottom');

    if (fixed) {
      htmlClass = `has-navbar-fixed-${fixed}`;
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

(Navbar as any).Brand = NavbarBrand;
(Navbar as any).Burger = NavbarBurger;
(Navbar as any).Container = NavbarContainer;
(Navbar as any).Divider = NavbarDivider;
(Navbar as any).Dropdown = NavbarDropdown;
(Navbar as any).Item = NavbarItem;
(Navbar as any).Link = NavbarLink;
(Navbar as any).Menu = NavbarMenu;

Navbar.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  renderAs: 'nav',
  transparent: false
};
