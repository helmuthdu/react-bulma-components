import cn from 'classnames';
import React from 'react';
import { Colors } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

type HelpProps = Partial<Modifiers> & {
  className?: string;
  color?: Colors;
};

export const Help: React.FunctionComponent<HelpProps> = ({ className, children, color, ...props }: any) => (
  <Element
    {...props}
    className={cn('help', className, {
      [`is-${color}`]: color
    })}
  >
    {children}
  </Element>
);

Help.defaultProps = {
  ...modifiers.defaultProps
};
