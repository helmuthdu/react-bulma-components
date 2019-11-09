import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';
import { ShowContext } from '../context';

type NavbarBurgerProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const NavbarBurger: React.FunctionComponent<NavbarBurgerProps> = ({
  style,
  className,
  ...rest
}: NavbarBurgerProps) => {
  const props = modifiers.clean(rest);
  return (
    <ShowContext.Consumer>
      {active => (
        <Element
          role="button"
          tabIndex="0"
          style={{ outline: 'none', ...style }}
          className={clsx('navbar-burger', modifiers.getClassName(rest), className, {
            'is-active': active
          })}
          {...props}
        >
          <span />
          <span />
          <span />
        </Element>
      )}
    </ShowContext.Consumer>
  );
};

NavbarBurger.defaultProps = {
  ...modifiers.defaultProps,
  onClick: () => {}
};
