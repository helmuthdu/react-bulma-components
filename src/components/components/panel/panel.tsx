import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

export * from './components';

type PanelProps = Partial<Modifiers>;

export const Panel: React.FunctionComponent<PanelProps> = ({ className, ...props }: PanelProps) => (
  <Element {...props} className={cn('panel', className)} />
);

Panel.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'nav'
};
