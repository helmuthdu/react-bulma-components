import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type PanelIconProps = Partial<Modifiers> & {
  icon?: string;
};

export const PanelIcon: React.FunctionComponent<PanelIconProps> = ({ className, ...props }: any) => (
  <Element {...props} className={cn('panel-icon', className)} />
);

PanelIcon.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'span'
};
