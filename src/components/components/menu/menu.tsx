import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../elements';

type MenuProps = ElementModifier;

export const Menu: React.FunctionComponent<MenuProps> = ({ className, ...props }: MenuProps) => (
  <Element {...props} className={cn('menu', className)} />
);

Menu.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'aside'
};
