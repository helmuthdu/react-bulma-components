import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../modifiers';
import { Element } from '../../../../elements';
import { PanelTabsTab } from './components';

type PanelTabsProps = Partial<Modifiers>;

export const PanelTabs: React.FunctionComponent<PanelTabsProps> = ({ className, ...props }: PanelTabsProps) => (
  <Element {...props} className={cn('panel-tabs', className)} />
);

(PanelTabs as any).Tab = PanelTabsTab;

PanelTabs.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
