import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type HeroBodyProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const HeroBody = React.forwardRef<HTMLDivElement, HeroBodyProps>(({ children, className, ...props }, ref) => (
  <Element className={clsx('hero-body', className)} {...props}>
    {children}
  </Element>
));

HeroBody.defaultProps = {
  ...modifiers.defaultProps
};

HeroBody.displayName = 'HeroBody';
