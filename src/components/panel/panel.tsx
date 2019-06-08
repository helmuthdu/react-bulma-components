import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';
import { PanelBlock } from './panel-block';
import { PanelHeader } from './panel-header';
import { PanelIcon } from './panel-icon';
import { PanelTabs } from './panel-tabs';

type PanelProps = ElementModifier;

export const Panel: React.FunctionComponent<PanelProps> & {
  Block: typeof PanelBlock;
  Header: typeof PanelHeader;
  Icon: typeof PanelIcon;
  Tabs: typeof PanelTabs;
} = ({ className, ...props }: PanelProps) => <Element {...props} className={cn('panel', className)} />;

Panel.Block = PanelBlock;
Panel.Header = PanelHeader;
Panel.Icon = PanelIcon;
Panel.Tabs = PanelTabs;

Panel.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'nav'
};
