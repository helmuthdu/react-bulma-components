import cn from 'classnames';
import React from 'react';
import { Breakpoints } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

export * from './components';

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

Level.defaultProps = {
  ...modifiers.defaultProps
};
