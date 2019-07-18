import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type HeroHeadProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const HeroHead: React.FunctionComponent<HeroHeadProps> = ({ children, className, ...props }: HeroHeadProps) => (
  <Element className={cn('hero-head', className)} {...props}>
    {children}
  </Element>
);

HeroHead.defaultProps = {
  ...modifiers.defaultProps
};
