import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type PanelIconProps = ElementModifier & {
  icon?: string;
} & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const PanelIcon: React.FunctionComponent<PanelIconProps> = ({ className, ...props }: PanelIconProps) => (
  <Element className={clsx('panel-icon', className)} {...props} />
);

PanelIcon.defaultProps = {
  ...modifiers.defaultProps,
  as: 'span'
};
