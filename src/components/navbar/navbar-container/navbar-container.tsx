import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarContainerProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    position?: 'start' | 'end';
  };

export const NavbarContainer = React.forwardRef<HTMLDivElement, NavbarContainerProps>(
  ({ className, children, position, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        {
          [`navbar-${position}`]: position
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

NavbarContainer.defaultProps = {
  ...modifiers.defaultProps,
  position: 'start'
};

NavbarContainer.displayName = 'NavbarContainer';
