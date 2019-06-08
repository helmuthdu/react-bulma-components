import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';

type SectionProps = ElementModifier & {
  size?: 'medium' | 'large';
} & Omit<React.ComponentProps<'section'>, 'unselectable'>;

export const Section: React.FunctionComponent<SectionProps> = ({
  children,
  className,
  size,
  ...rest
}: SectionProps) => {
  const props = modifiers.clean(rest);
  return (
    <Element
      className={cn('section', className, modifiers.getClassName(rest), {
        [`is-${size}`]: size
      })}
      {...props}
    >
      {children}
    </Element>
  );
};

Section.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'section'
};
