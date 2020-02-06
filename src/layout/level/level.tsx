import clsx from 'clsx';
import * as React from 'react';
import { Breakpoints } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type LevelProps = ElementModifier & {
  breakpoint?: Breakpoints;
} & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const Level = React.forwardRef<HTMLDivElement, LevelProps>(
  ({ children, className, breakpoint, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx('level', className, {
        [`is-${breakpoint}`]: breakpoint
      })}
      {...props}
    >
      {children}
    </Element>
  )
);

Level.defaultProps = {
  ...modifiers.defaultProps
};
