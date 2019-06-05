import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../elements';

type NavbarDividerProps = Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> & ElementModifier;

export const NavbarDivider: React.FunctionComponent<NavbarDividerProps> = ({
  className,
  ...props
}: NavbarDividerProps) => <Element {...props} className={cn('navbar-divider', className)} />;

NavbarDivider.defaultProps = {
  ...modifiers.defaultProps
};
