import clsx from 'clsx';
import * as React from 'react';
import { Breakpoints } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type LevelProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    breakpoint?: Breakpoints;
  };

export const Level = React.forwardRef<HTMLDivElement, LevelProps>(
  ({ children, className, breakpoint, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        'level',
        {
          [`is-${breakpoint}`]: breakpoint
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

Level.defaultProps = {
  ...modifiers.defaultProps
};

Level.displayName = 'Level';
