import cn from 'classnames';
import * as React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type NavbarContainerProps = Partial<Modifiers> & {
  position?: 'start' | 'end';
};

export const NavbarContainer: React.FunctionComponent<NavbarContainerProps> = ({
  className,
  children,
  position,
  ...props
}: NavbarContainerProps) => (
  <Element
    {...props}
    className={cn(
      {
        [`navbar-${position}`]: position
      },
      className
    )}
  >
    {children}
  </Element>
);

NavbarContainer.defaultProps = {
  ...modifiers.defaultProps,
  position: 'start'
};
