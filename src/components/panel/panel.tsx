import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';
import { PanelBlock } from './panel-block';
import { PanelHeading } from './panel-heading';
import { PanelIcon } from './panel-icon';
import { PanelTabs } from './panel-tabs';

type PanelProps = ElementModifier;

export const Panel: React.FunctionComponent<PanelProps> & {
  Block: typeof PanelBlock;
  PanelHeading: typeof PanelHeading;
  Icon: typeof PanelIcon;
  Tabs: typeof PanelTabs;
} = ({ className, ...props }: PanelProps) => <Element {...props} className={cn('panel', className)} />;

Panel.Block = PanelBlock;
Panel.PanelHeading = PanelHeading;
Panel.Icon = PanelIcon;
Panel.Tabs = PanelTabs;

Panel.defaultProps = {
  ...modifiers.defaultProps,
  as: 'nav'
};
