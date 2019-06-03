import cn from 'classnames';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

type LevelItemProps = {
  className?: string;
  style?: object;
  renderAs?: string | ((...args: any[]) => any);
};
export const LevelItem: React.FunctionComponent<LevelItemProps> = ({ children, className, ...props }: any) => (
  <Element {...props} className={cn('level-item', className)}>
    {children}
  </Element>
);
LevelItem.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
