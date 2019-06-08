import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type LevelItemProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const LevelItem: React.FunctionComponent<LevelItemProps> = ({
  children,
  className,
  ...props
}: LevelItemProps) => (
  <Element className={cn('level-item', className)} {...props}>
    {children}
  </Element>
);

LevelItem.defaultProps = {
  ...modifiers.defaultProps
};
