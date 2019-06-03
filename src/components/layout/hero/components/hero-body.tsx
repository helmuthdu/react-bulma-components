import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type HeroBodyProps = Partial<Modifiers>;

export const HeroBody: React.FunctionComponent<HeroBodyProps> = ({ children, className, ...props }: HeroBodyProps) => (
  <Element {...props} className={cn(className, 'hero-body')}>
    {children}
  </Element>
);

HeroBody.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
