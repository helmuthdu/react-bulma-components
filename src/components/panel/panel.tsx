import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type PanelProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    color?: Colors;
  };

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(({ className, color, ...props }, ref) => (
  <Element
    ref={ref}
    className={clsx(
      'panel',
      {
        [`is-${color}`]: color
      },
      className
    )}
    {...props}
  />
));

Panel.defaultProps = {
  ...modifiers.defaultProps,
  as: 'nav'
};

Panel.displayName = 'Panel';
