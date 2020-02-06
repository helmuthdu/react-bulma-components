import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarContainerProps = ElementModifier & {
  position?: 'start' | 'end';
};

export const NavbarContainer = React.forwardRef<HTMLDivElement, NavbarContainerProps>(
  ({ className, children, position, ...props }, ref) => (
    <Element
      ref={ref}
      {...props}
      className={clsx(
        {
          [`navbar-${position}`]: position
        },
        className
      )}
    >
      {children}
    </Element>
  )
);

NavbarContainer.defaultProps = {
  ...modifiers.defaultProps,
  position: 'start'
};
