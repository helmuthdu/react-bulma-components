import cn from 'classnames';
import React from 'react';
import { Colors } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';

type HelpProps = ElementModifier & {
  color?: Colors;
} & Omit<React.ComponentProps<'span'>, 'color' | 'unselectable'>;

export const Help: React.FunctionComponent<HelpProps> = ({ className, children, color, ...props }: HelpProps) => (
  <Element
    className={cn('help', className, {
      [`is-${color}`]: color
    })}
    {...props}
  >
    {children}
  </Element>
);

Help.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'span'
};
