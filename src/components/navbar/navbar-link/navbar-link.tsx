import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarLinkProps = ElementModifier;

export const NavbarLink = React.forwardRef<HTMLSpanElement, NavbarLinkProps>(
  ({ className, children, ...props }, ref) => (
    <Element ref={ref} {...props} className={clsx('navbar-link', className)}>
      {children}
    </Element>
  )
);

NavbarLink.defaultProps = {
  ...modifiers.defaultProps,
  as: 'span'
};
