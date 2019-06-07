import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../elements';

type FooterProps = ElementModifier;

export const Footer: React.FunctionComponent<FooterProps> = ({ children, className, ...rest }: FooterProps) => {
  const props = modifiers.clean(rest);
  return (
    <Element {...props} className={cn('footer', className, modifiers.getClassName(rest))}>
      {children}
    </Element>
  );
};

Footer.defaultProps = {
  ...modifiers.defaultProps
};
