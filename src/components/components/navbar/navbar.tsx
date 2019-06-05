import cn from 'classnames';
import * as React from 'react';
import { useEffect } from 'react';
import { Colors, isServer } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';
import { ShowContext } from './context';

type NavbarProps = Partial<Modifiers> & {
  active?: boolean;
  color?: Colors;
  fixed?: null | 'top' | 'bottom';
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

Navbar.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  renderAs: 'nav',
  transparent: false
};
