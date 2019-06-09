import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type HeroFooterProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const HeroFoot: React.FunctionComponent<HeroFooterProps> = ({
  children,
  className,
  ...props
}: HeroFooterProps) => (
  <Element className={cn('hero-foot', className)} {...props}>
    {children}
  </Element>
);

HeroFoot.defaultProps = {
  ...modifiers.defaultProps
};
