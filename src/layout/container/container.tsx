import clsx from 'clsx';
import * as React from 'react';
import { Breakpoints } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

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
      className={clsx('container', className, modifiers.getClassName(rest), {
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
