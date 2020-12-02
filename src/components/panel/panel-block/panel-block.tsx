import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type PanelBlockProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    active?: boolean;
  };

export const PanelBlock = React.forwardRef<HTMLDivElement, PanelBlockProps>(({ className, active, ...props }, ref) => (
  <Element
    ref={ref}
    className={clsx(
      'panel-block',
      {
        'is-active': active
      },
      className
    )}
    {...props}
  />
));

PanelBlock.defaultProps = {
  ...modifiers.defaultProps,
  active: false
};

PanelBlock.displayName = 'PanelBlock';
