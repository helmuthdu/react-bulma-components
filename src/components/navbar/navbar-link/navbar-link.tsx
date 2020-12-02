import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type NavbarLinkProps = Omit<React.ComponentPropsWithRef<'span'>, 'unselectable'> & ElementModifier;

export const NavbarLink = React.forwardRef<HTMLSpanElement, NavbarLinkProps>(
  ({ className, children, ...props }, ref) => (
    <Element ref={ref} className={clsx('navbar-link', className)} {...props}>
      {children}
    </Element>
  )
);

NavbarLink.defaultProps = {
  ...modifiers.defaultProps,
  as: 'span'
};

NavbarLink.displayName = 'NavbarLink';
