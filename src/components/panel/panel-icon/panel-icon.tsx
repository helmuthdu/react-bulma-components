import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type PanelIconProps = ElementModifier & {
  icon?: string;
} & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const PanelIcon: React.FunctionComponent<PanelIconProps> = ({ className, ...props }: PanelIconProps) => (
  <Element className={cn('panel-icon', className)} {...props} />
);

PanelIcon.defaultProps = {
  ...modifiers.defaultProps,
  as: 'span'
};
