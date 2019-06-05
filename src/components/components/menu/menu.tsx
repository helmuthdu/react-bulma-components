import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

type MenuProps = Partial<Modifiers>;

export const Menu: React.FunctionComponent<MenuProps> = ({ className, ...props }: MenuProps) => (
  <Element {...props} className={cn('menu', className)} />
);

Menu.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'aside'
};
