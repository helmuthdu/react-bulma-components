import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type PanelHeaderProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const PanelHeading: React.FunctionComponent<PanelHeaderProps> = ({ className, ...props }: PanelHeaderProps) => (
  <Element className={clsx('panel-heading', className)} {...props} />
);

PanelHeading.defaultProps = {
  ...modifiers.defaultProps
};
