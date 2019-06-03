import cn from 'classnames';
import React from 'react';
import { Breakpoints } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';
import { LevelItem, LevelSide } from './components';

type LevelProps = Partial<Modifiers> & {
  breakpoint?: Breakpoints;
};

export const Level: React.FunctionComponent<LevelProps> = ({
  children,
  className,
  breakpoint,
  ...props
}: LevelProps) => (
  <Element
    {...props}
    className={cn('level', className, {
      [`is-${breakpoint}`]: breakpoint
    })}
  >
    {children}
  </Element>
);

(Level as any).Item = LevelItem;
(Level as any).Side = LevelSide;

Level.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
