import cn from 'classnames';
import * React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type PanelHeaderProps = ElementModifier;

export const PanelHeader: React.FunctionComponent<PanelHeaderProps> = ({ className, ...props }: PanelHeaderProps) => (
  <Element {...props} className={cn('panel-heading', className)} />
);

PanelHeader.defaultProps = {
  ...modifiers.defaultProps
};
