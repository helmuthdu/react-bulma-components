import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type HelpProps = ElementModifier & {
  color?: Colors;
} & Omit<React.ComponentProps<'span'>, 'ref' | 'color' | 'unselectable'>;

export const Help = React.forwardRef<HTMLSpanElement, HelpProps>(({ className, children, color, ...props }, ref) => (
  <Element
    ref={ref}
    className={clsx('help', className, {
      [`is-${color}`]: color
    })}
    {...props}>
    {children}
  </Element>
));

Help.defaultProps = {
  ...modifiers.defaultProps,
  as: 'span'
};
