import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type HelpProps = ElementModifier & {
  color?: Colors;
} & Omit<React.ComponentProps<'span'>, 'color' | 'unselectable'>;

export const Help: React.FunctionComponent<HelpProps> = ({ className, children, color, ...props }: HelpProps) => (
  <Element
    className={clsx('help', className, {
      [`is-${color}`]: color
    })}
    {...props}
  >
    {children}
  </Element>
);

Help.defaultProps = {
  ...modifiers.defaultProps,
  as: 'span'
};
