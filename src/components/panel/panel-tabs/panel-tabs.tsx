import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type PanelTabsProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const PanelTabs = React.forwardRef<HTMLDivElement, PanelTabsProps>(({ className, ...props }, ref) => (
  <Element ref={ref} className={clsx('panel-tabs', className)} {...props} />
));

PanelTabs.defaultProps = {
  ...modifiers.defaultProps
};

PanelTabs.displayName = 'PanelTabs';
