import cn from 'classnames';
import * React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type PanelIconProps = ElementModifier & {
  icon?: string;
};

export const PanelIcon: React.FunctionComponent<PanelIconProps> = ({ className, ...props }: PanelIconProps) => (
  <Element {...props} className={cn('panel-icon', className)} />
);

PanelIcon.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'span'
};
