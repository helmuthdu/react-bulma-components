import cn from 'classnames';
import React from 'react';
import { Breakpoints } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';

type ContainerProps = ElementModifier & {
  breakpoint?: Breakpoints;
  fluid?: boolean;
} & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const Container: React.FunctionComponent<ContainerProps> = ({
  children,
  fluid,
  breakpoint,
  className,
  ...rest
}: ContainerProps) => {
  const props = modifiers.clean(rest);
  return (
    <Element
      className={cn('container', className, modifiers.getClassName(rest), {
        'is-fluid': fluid,
        [`is-${breakpoint}`]: breakpoint
      })}
      {...props}
    >
      {children}
    </Element>
  );
};

Container.defaultProps = {
  ...modifiers.defaultProps,
  fluid: false
};
