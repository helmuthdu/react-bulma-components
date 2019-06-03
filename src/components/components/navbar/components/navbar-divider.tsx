import cn from 'classnames';
import * as React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type NavbarDividerProps = Partial<Modifiers> & {
  className?: string;
  style?: object;
};

export const NavbarDivider: React.FunctionComponent<NavbarDividerProps> = ({
  className,
  ...props
}: NavbarDividerProps) => <Element {...props} className={cn('navbar-divider', className)} />;

NavbarDivider.defaultProps = {
  ...modifiers.defaultProps
};
