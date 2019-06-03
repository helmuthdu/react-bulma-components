import cn from 'classnames';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

type LevelSideProps = {
  align?: string;
  className?: string;
  renderAs?: string | ((...args: any[]) => any);
  style?: object;
};
export const LevelSide: React.FunctionComponent<LevelSideProps> = ({ children, className, align, ...props }: any) => (
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
  align: 'left',
  renderAs: 'div'
};
