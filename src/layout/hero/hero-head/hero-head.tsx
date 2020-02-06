import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type HeroHeadProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const HeroHead = React.forwardRef<HTMLDivElement, HeroHeadProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} className={clsx('hero-head', className)} {...props}>
    {children}
  </Element>
));

HeroHead.defaultProps = {
  ...modifiers.defaultProps
};
