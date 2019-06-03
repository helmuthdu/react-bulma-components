import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';
import { PanelBlock, PanelHeader, PanelIcon, PanelTabs } from './components';

type PanelProps = Partial<Modifiers>;

export const Panel: React.FunctionComponent<PanelProps> = ({ className, ...props }: PanelProps) => (
  <Element {...props} className={cn('panel', className)} />
);

(Panel as any).Block = PanelBlock;
(Panel as any).Header = PanelHeader;
(Panel as any).Icon = PanelIcon;
(Panel as any).Tabs = PanelTabs;

Panel.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'nav'
};
