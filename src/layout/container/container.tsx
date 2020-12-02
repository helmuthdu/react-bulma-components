import clsx from 'clsx';
import * as React from 'react';
import { Breakpoints } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type ContainerProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    breakpoint?: Breakpoints;
    fluid?: boolean;
  };

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, fluid, breakpoint, className, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        'container',
        {
          'is-fluid': fluid,
          [`is-${breakpoint}`]: breakpoint
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

Container.defaultProps = {
  ...modifiers.defaultProps,
  fluid: false
};

Container.displayName = 'Container';
