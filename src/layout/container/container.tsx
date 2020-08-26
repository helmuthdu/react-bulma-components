import clsx from 'clsx';
import * as React from 'react';
import { Breakpoints } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type ContainerProps = ElementModifier & {
  breakpoint?: Breakpoints;
  fluid?: boolean;
} & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, fluid, breakpoint, className, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx('container', className, modifiers.getClassName(props), {
        'is-fluid': fluid,
        [`is-${breakpoint}`]: breakpoint
      })}
      {...modifiers.clean(props)}>
      {children}
    </Element>
  )
);

Container.defaultProps = {
  ...modifiers.defaultProps,
  fluid: false
};
