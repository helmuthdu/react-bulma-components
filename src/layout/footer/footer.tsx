import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type FooterProps = ElementModifier & Omit<React.ComponentProps<'footer'>, 'ref' | 'unselectable'>;

export const Footer = React.forwardRef<HTMLDivElement, FooterProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} className={clsx('footer', className, modifiers.getClassName(props))} {...modifiers.clean(props)}>
    {children}
  </Element>
));

Footer.defaultProps = {
  ...modifiers.defaultProps,
  as: 'footer'
};
