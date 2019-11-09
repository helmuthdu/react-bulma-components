import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarDividerProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const NavbarDivider: React.FunctionComponent<NavbarDividerProps> = ({
  className,
  ...props
}: NavbarDividerProps) => <Element className={clsx('navbar-divider', className)} {...props} />;

NavbarDivider.defaultProps = {
  ...modifiers.defaultProps
};
