import cn from 'classnames';
import * as React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';
import { ShowContext } from '../context';

type NavbarBurgerProps = Partial<Modifiers> & {
  onClick?: (...args: any[]) => any;
};

export const NavbarBurger: React.FunctionComponent<NavbarBurgerProps> = ({
  style,
  className,
  ...allProps
}: NavbarBurgerProps) => {
  const props = modifiers.clean(allProps);
  return (
    <ShowContext.Consumer>
      {active => (
        <Element
          role="button"
          tabIndex="0"
          style={{ outline: 'none', ...style }}
          className={cn('navbar-burger', modifiers.getClassName(allProps), className, {
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
