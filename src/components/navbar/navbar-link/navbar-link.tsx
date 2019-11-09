import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarLinkProps = ElementModifier;

export const NavbarLink: React.FunctionComponent<NavbarLinkProps> = ({
  className,
  children,
  ...props
}: NavbarLinkProps) => (
  <Element {...props} className={clsx('navbar-link', className)}>
    {children}
  </Element>
);

NavbarLink.defaultProps = {
  ...modifiers.defaultProps,
  as: 'span'
};
