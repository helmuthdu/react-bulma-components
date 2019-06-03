import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

type FooterProps = Partial<Modifiers>;

export const Footer: React.FunctionComponent<FooterProps> = ({ children, className, ...props }: FooterProps) => (
  <Element {...props} className={cn('footer', className)}>
    {children}
  </Element>
);

Footer.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
