import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../elements';

type NavbarDividerProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const NavbarDivider: React.FunctionComponent<NavbarDividerProps> = ({
  className,
  ...props
}: NavbarDividerProps) => <Element className={cn('navbar-divider', className)} {...props} />;

NavbarDivider.defaultProps = {
  ...modifiers.defaultProps
};
