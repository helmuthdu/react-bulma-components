import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../elements';

type SectionProps = ElementModifier & {
  size?: 'medium' | 'large';
};

export const Section: React.FunctionComponent<SectionProps> = ({
  children,
  className,
  size,
  ...props
}: SectionProps) => (
  <Element
    {...props}
    className={cn('section', className, {
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Section.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'section'
};
