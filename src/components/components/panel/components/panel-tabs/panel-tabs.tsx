import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../modifiers';
import { Element } from '../../../../elements';

export * from './components';

type PanelTabsProps = Partial<Modifiers>;

export const PanelTabs: React.FunctionComponent<PanelTabsProps> = ({ className, ...props }: PanelTabsProps) => (
  <Element {...props} className={cn('panel-tabs', className)} />
);

PanelTabs.defaultProps = {
  ...modifiers.defaultProps
};
