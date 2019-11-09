import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type FooterProps = ElementModifier & Omit<React.ComponentProps<'footer'>, 'unselectable'>;

export const Footer: React.FunctionComponent<FooterProps> = ({ children, className, ...rest }: FooterProps) => {
  const props = modifiers.clean(rest);
  return (
    <Element className={clsx('footer', className, modifiers.getClassName(rest))} {...props}>
      {children}
    </Element>
  );
};

Footer.defaultProps = {
  ...modifiers.defaultProps,
  as: 'footer'
};
