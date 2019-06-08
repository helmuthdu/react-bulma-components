import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type HeroFooterProps = ElementModifier;

export const HeroFooter: React.FunctionComponent<HeroFooterProps> = ({
  children,
  className,
  ...props
}: HeroFooterProps) => (
  <Element {...props} className={cn('hero-foot', className)}>
    {children}
  </Element>
);

HeroFooter.defaultProps = {
  ...modifiers.defaultProps
};
