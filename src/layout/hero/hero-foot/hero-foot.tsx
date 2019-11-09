import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type HeroFooterProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const HeroFoot: React.FunctionComponent<HeroFooterProps> = ({
  children,
  className,
  ...props
}: HeroFooterProps) => (
  <Element className={clsx('hero-foot', className)} {...props}>
    {children}
  </Element>
);

HeroFoot.defaultProps = {
  ...modifiers.defaultProps
};
