import clsx from 'clsx';
import * as React from 'react';
import { Breakpoints } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';
import { LevelItem } from './level-item';
import { LevelSide } from './level-side';

type LevelProps = ElementModifier & {
  breakpoint?: Breakpoints;
} & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const Level: React.FunctionComponent<LevelProps> & {
  Item: typeof LevelItem;
  Side: typeof LevelSide;
} = ({ children, className, breakpoint, ...props }: LevelProps) => (
  <Element
    className={clsx('level', className, {
      [`is-${breakpoint}`]: breakpoint
    })}
    {...props}
  >
    {children}
  </Element>
);

Level.Item = LevelItem;
Level.Side = LevelSide;

Level.defaultProps = {
  ...modifiers.defaultProps
};
