import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

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
    className={cn(className, {
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
