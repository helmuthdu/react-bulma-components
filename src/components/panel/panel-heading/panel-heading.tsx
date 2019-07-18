import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type PanelHeaderProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const PanelHeading: React.FunctionComponent<PanelHeaderProps> = ({ className, ...props }: PanelHeaderProps) => (
  <Element className={cn('panel-heading', className)} {...props} />
);

PanelHeading.defaultProps = {
  ...modifiers.defaultProps
};
