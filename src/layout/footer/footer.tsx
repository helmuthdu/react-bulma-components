import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';

type FooterProps = ElementModifier & Omit<React.ComponentProps<'footer'>, 'unselectable'>;

export const Footer: React.FunctionComponent<FooterProps> = ({ children, className, ...rest }: FooterProps) => {
  const props = modifiers.clean(rest);
  return (
    <Element className={cn('footer', className, modifiers.getClassName(rest))} {...props}>
      {children}
    </Element>
  );
};

Footer.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'footer'
};
