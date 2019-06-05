import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type LevelSideProps = Partial<Modifiers> & {
  align?: string;
};

export const LevelSide: React.FunctionComponent<LevelSideProps> = ({
  children,
  className,
  align,
  ...props
}: LevelSideProps) => (
  <Element
    {...props}
    className={cn(className, {
      [`level-${align}`]: align
    })}
  >
    {children}
  </Element>
);

LevelSide.defaultProps = {
  ...modifiers.defaultProps,
  align: 'left'
};
