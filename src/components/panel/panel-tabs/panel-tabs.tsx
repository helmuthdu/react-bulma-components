import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type PanelTabsProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const PanelTabs = React.forwardRef<HTMLDivElement, PanelTabsProps>(({ className, ...props }, ref) => (
  <Element ref={ref} className={clsx('panel-tabs', className)} {...props} />
));

PanelTabs.defaultProps = {
  ...modifiers.defaultProps
};
