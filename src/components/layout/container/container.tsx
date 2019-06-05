import cn from 'classnames';
import React from 'react';
import { Breakpoints } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../elements';

type ContainerProps = ElementModifier & {
  breakpoint?: Breakpoints;
  fluid?: boolean;
};

export const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  fluid,
  breakpoint,
  className,
  ...props
}: ContainerProps) => (
  <Element
    {...props}
    className={cn('container', className, {
      'is-fluid': fluid,
      [`is-${breakpoint}`]: breakpoint
    })}
  >
    {children}
  </Element>
);

Container.defaultProps = {
  ...modifiers.defaultProps,
  fluid: false
};
