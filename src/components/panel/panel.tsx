import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type PanelProps = ElementModifier & {
  color?: Colors;
};

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(({ className, color, ...props }, ref) => (
  <Element
    ref={ref}
    {...props}
    className={clsx('panel', className, {
      [`is-${color}`]: color
    })}
  />
));

Panel.defaultProps = {
  ...modifiers.defaultProps,
  as: 'nav'
};
