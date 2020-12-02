import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type FooterProps = Omit<React.ComponentPropsWithRef<'footer'>, 'unselectable'> & ElementModifier;

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} className={clsx('footer', className)} {...props}>
    {children}
  </Element>
));

Footer.defaultProps = {
  ...modifiers.defaultProps,
  as: 'footer'
};

Footer.displayName = 'Footer';
