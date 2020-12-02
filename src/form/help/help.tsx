import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type HelpProps = Omit<React.ComponentPropsWithRef<'span'>, 'unselectable'> &
  ElementModifier & {
    color?: Colors;
  };

export const Help = React.forwardRef<HTMLSpanElement, HelpProps>(({ className, children, color, ...props }, ref) => (
  <Element
    ref={ref}
    className={clsx(
      'help',
      {
        [`is-${color}`]: color
      },
      className
    )}
    {...props}>
    {children}
  </Element>
));

Help.defaultProps = {
  ...modifiers.defaultProps,
  as: 'span'
};

Help.displayName = 'Help';
