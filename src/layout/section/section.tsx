import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type SectionProps = ElementModifier & {
  size?: 'medium' | 'large';
} & Omit<React.ComponentProps<'section'>, 'ref' | 'size' | 'unselectable'>;

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ children, className, size, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx('section', className, modifiers.getClassName(props), {
        [`is-${size}`]: size
      })}
      {...modifiers.clean(props)}
    >
      {children}
    </Element>
  )
);

Section.defaultProps = {
  ...modifiers.defaultProps,
  as: 'section'
};
