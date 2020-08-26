import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type LevelSideProps = ElementModifier & {
  align?: 'left' | 'right';
} & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const LevelSide = React.forwardRef<HTMLDivElement, LevelSideProps>(
  ({ children, className, align, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(className, {
        [`level-${align}`]: align
      })}
      {...props}>
      {children}
    </Element>
  )
);

LevelSide.defaultProps = {
  ...modifiers.defaultProps,
  align: 'left'
};
