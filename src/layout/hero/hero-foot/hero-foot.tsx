import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type HeroFooterProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const HeroFoot = React.forwardRef<HTMLDivElement, HeroFooterProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} className={clsx('hero-foot', className)} {...props}>
    {children}
  </Element>
));

HeroFoot.defaultProps = {
  ...modifiers.defaultProps
};

HeroFoot.displayName = 'HeroFoot';
