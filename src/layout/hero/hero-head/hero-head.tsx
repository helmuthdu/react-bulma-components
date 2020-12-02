import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type HeroHeadProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const HeroHead = React.forwardRef<HTMLDivElement, HeroHeadProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} className={clsx('hero-head', className)} {...props}>
    {children}
  </Element>
));

HeroHead.defaultProps = {
  ...modifiers.defaultProps
};

HeroHead.displayName = 'HeroHead';
