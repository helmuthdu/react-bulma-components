import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type LevelItemProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const LevelItem: React.FunctionComponent<LevelItemProps> = ({
  children,
  className,
  ...props
}: LevelItemProps) => (
  <Element className={clsx('level-item', className)} {...props}>
    {children}
  </Element>
);

LevelItem.defaultProps = {
  ...modifiers.defaultProps
};
