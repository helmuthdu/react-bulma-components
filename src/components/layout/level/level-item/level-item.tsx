import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../elements';

type LevelItemProps = ElementModifier;

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
