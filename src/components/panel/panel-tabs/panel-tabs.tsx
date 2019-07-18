import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';
import { PanelTab } from '../panel-tab';

type PanelTabsProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const PanelTabs: React.FunctionComponent<PanelTabsProps> & {
  Tab: typeof PanelTab;
} = ({ className, ...props }: PanelTabsProps) => <Element className={cn('panel-tabs', className)} {...props} />;

PanelTabs.Tab = PanelTab;

PanelTabs.defaultProps = {
  ...modifiers.defaultProps
};
