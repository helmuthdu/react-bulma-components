import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type HeroHeadProps = ElementModifier;

export const HeroHeader: React.FunctionComponent<HeroHeadProps> = ({
  children,
  className,
  ...props
}: HeroHeadProps) => (
  <Element {...props} className={cn('hero-head', className)}>
    {children}
  </Element>
);

HeroHeader.defaultProps = {
  ...modifiers.defaultProps
};
