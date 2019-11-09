import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type LevelSideProps = ElementModifier & {
  align?: 'left' | 'right';
} & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const LevelSide: React.FunctionComponent<LevelSideProps> = ({
  children,
  className,
  align,
  ...props
}: LevelSideProps) => (
  <Element
    className={clsx(className, {
      [`level-${align}`]: align
    })}
    {...props}
  >
    {children}
  </Element>
);

LevelSide.defaultProps = {
  ...modifiers.defaultProps,
  align: 'left'
};
