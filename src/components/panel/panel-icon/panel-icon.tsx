import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type PanelIconProps = Omit<React.ComponentPropsWithRef<'span'>, 'unselectable'> &
  ElementModifier & {
    icon?: string;
  };

export const PanelIcon = React.forwardRef<HTMLSpanElement, PanelIconProps>(({ className, ...props }, ref) => (
  <Element ref={ref} className={clsx('panel-icon', className)} {...props} />
));

PanelIcon.defaultProps = {
  ...modifiers.defaultProps,
  as: 'span'
};

PanelIcon.displayName = 'PanelIcon';
