import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type HeroBodyProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const HeroBody: React.FunctionComponent<HeroBodyProps> = ({ children, className, ...props }: HeroBodyProps) => (
  <Element className={clsx('hero-body', className)} {...props}>
    {children}
  </Element>
);

HeroBody.defaultProps = {
  ...modifiers.defaultProps
};
