import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type HeroHeadProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const HeroHead: React.FunctionComponent<HeroHeadProps> = ({ children, className, ...props }: HeroHeadProps) => (
  <Element className={clsx('hero-head', className)} {...props}>
    {children}
  </Element>
);

HeroHead.defaultProps = {
  ...modifiers.defaultProps
};
