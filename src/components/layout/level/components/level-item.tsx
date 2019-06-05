import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type LevelItemProps = Partial<Modifiers>;

export const LevelItem: React.FunctionComponent<LevelItemProps> = ({
  children,
  className,
  ...props
}: LevelItemProps) => (
  <Element {...props} className={cn('level-item', className)}>
    {children}
  </Element>
);

LevelItem.defaultProps = {
  ...modifiers.defaultProps
};
