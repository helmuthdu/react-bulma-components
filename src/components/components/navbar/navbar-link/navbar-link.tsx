import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../elements';

type NavbarLinkProps = ElementModifier;

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
