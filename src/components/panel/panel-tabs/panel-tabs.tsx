import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';
import { PanelTab } from '../panel-tab';

type PanelTabsProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const PanelTabs: React.FunctionComponent<PanelTabsProps> & {
  Tab: typeof PanelTab;
} = ({ className, ...props }: PanelTabsProps) => <Element className={clsx('panel-tabs', className)} {...props} />;

PanelTabs.Tab = PanelTab;

PanelTabs.defaultProps = {
  ...modifiers.defaultProps
};
