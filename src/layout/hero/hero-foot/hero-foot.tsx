import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type HeroFooterProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const HeroFoot = React.forwardRef<HTMLDivElement, HeroFooterProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} className={clsx('hero-foot', className)} {...props}>
    {children}
  </Element>
));

HeroFoot.defaultProps = {
  ...modifiers.defaultProps
};
