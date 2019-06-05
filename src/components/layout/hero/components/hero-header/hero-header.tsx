import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../modifiers';
import { Element } from '../../../../elements';

type HeroHeadProps = Partial<Modifiers>;

export const HeroHeader: React.FunctionComponent<HeroHeadProps> = ({ children, className, ...props }: HeroHeadProps) => (
  <Element {...props} className={cn(className, 'hero-head')}>
    {children}
  </Element>
);

HeroHeader.defaultProps = {
  ...modifiers.defaultProps
};
