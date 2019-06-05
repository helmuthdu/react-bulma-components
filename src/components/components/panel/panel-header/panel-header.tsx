import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type PanelHeaderProps = Partial<Modifiers>;

export const PanelHeader: React.FunctionComponent<PanelHeaderProps> = ({ className, ...props }: PanelHeaderProps) => (
  <Element {...props} className={cn('panel-heading', className)} />
);

PanelHeader.defaultProps = {
  ...modifiers.defaultProps
};
