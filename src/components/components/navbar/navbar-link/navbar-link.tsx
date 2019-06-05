import cn from 'classnames';
import * as React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type NavbarLinkProps = Partial<Modifiers>;

export const NavbarLink: React.FunctionComponent<NavbarLinkProps> = ({
  className,
  children,
  ...props
}: NavbarLinkProps) => (
  <Element {...props} className={cn('navbar-link', className)}>
    {children}
  </Element>
);

NavbarLink.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'span'
};
