import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../elements';
import { ShowContext } from '../context';

type NavbarBurgerProps = Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> &
  ElementModifier & {
    onClick?: (...args: any[]) => void;
  };

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
          className={cn('navbar-burger', modifiers.getClassName(rest), className, {
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
