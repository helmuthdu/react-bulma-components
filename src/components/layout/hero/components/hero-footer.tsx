import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type HeroFooterProps = Partial<Modifiers>;

export const HeroFooter: React.FunctionComponent<HeroFooterProps> = ({
  children,
  className,
  ...props
}: HeroFooterProps) => (
  <Element {...props} className={cn(className, 'hero-foot')}>
    {children}
  </Element>
);

HeroFooter.defaultProps = {
  ...modifiers.defaultProps
};
