import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type HeroBodyProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const HeroBody = React.forwardRef<HTMLDivElement, HeroBodyProps>(({ children, className, ...props }, ref) => (
  <Element className={clsx('hero-body', className)} {...props}>
    {children}
  </Element>
));

HeroBody.defaultProps = {
  ...modifiers.defaultProps
};
