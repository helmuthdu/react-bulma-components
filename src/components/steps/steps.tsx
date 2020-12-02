import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type StepsProps = Omit<React.ComponentPropsWithRef<'ul'>, 'unselectable'> & ElementModifier & { size?: Sizes };

export const Steps = React.forwardRef<HTMLUListElement, StepsProps>(({ className, children, size, ...props }, ref) => (
  <Element
    ref={ref}
    className={clsx(
      'steps',
      {
        [`is-${size}`]: size
      },
      className
    )}
    {...props}>
    {children}
  </Element>
));

Steps.defaultProps = {
  ...modifiers.defaultProps,
  as: 'ul'
};

Steps.displayName = 'Steps';
