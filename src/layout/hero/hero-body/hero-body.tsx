import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type HeroBodyProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const HeroBody: React.FunctionComponent<HeroBodyProps> = ({ children, className, ...props }: HeroBodyProps) => (
  <Element className={cn('hero-body', className)} {...props}>
    {children}
  </Element>
);

HeroBody.defaultProps = {
  ...modifiers.defaultProps
};
