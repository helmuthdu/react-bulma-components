import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../elements';

type FooterProps = ElementModifier;

export const Footer: React.FunctionComponent<FooterProps> = ({ children, className, ...props }: FooterProps) => (
  <Element {...props} className={cn('footer', className)}>
    {children}
  </Element>
);

Footer.defaultProps = {
  ...modifiers.defaultProps
};
