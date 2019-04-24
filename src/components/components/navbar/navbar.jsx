import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
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

const colors = Object.values(CONSTANTS.COLORS);

let htmlClass = '';

export const getHtmlClasses = () => htmlClass;

export const Navbar = ({ children, className, fixed, transparent, color, active, ...props }) => {
  useEffect(() => {
    if (!CONSTANTS.IS_CLIENT) {
      return null;
    }

    const html = window.document.querySelector('html');
    html.classList.remove('has-navbar-fixed-top');
    html.classList.remove('has-navbar-fixed-bottom');

    if (fixed) {
      htmlClass = `has-navbar-fixed-${fixed}`;
      html.classList.add(`has-navbar-fixed-${fixed}`);
    }

    return () => {
      window.document.querySelector('html').classList.remove(`has-navbar-fixed-${fixed}`);
    };
  });

  return (
    <ShowContext.Provider value={active}>
      <Element
        {...props}
        role="navigation"
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

Navbar.propTypes = {
  ...modifiers.propTypes,
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  fixed: PropTypes.oneOf(['top', 'bottom']),
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object,
  transparent: PropTypes.bool
};

Navbar.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  renderAs: 'nav',
  transparent: false
};
