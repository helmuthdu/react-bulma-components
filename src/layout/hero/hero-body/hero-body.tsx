import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type HeroBodyProps = ElementModifier;

export const HeroBody: React.FunctionComponent<HeroBodyProps> = ({ children, className, ...props }: HeroBodyProps) => (
  <Element {...props} className={cn('hero-body', className)}>
    {children}
  </Element>
);

HeroBody.defaultProps = {
  ...modifiers.defaultProps
};
