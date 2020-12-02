import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type LevelSideProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    align?: 'left' | 'right';
  };

export const LevelSide = React.forwardRef<HTMLDivElement, LevelSideProps>(
  ({ children, className, align, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        {
          [`level-${align}`]: align
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

LevelSide.defaultProps = {
  ...modifiers.defaultProps,
  align: 'left'
};

LevelSide.displayName = 'LevelSide';
