import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type SectionProps = Omit<React.ComponentPropsWithRef<'section'>, 'unselectable'> &
  ElementModifier & {
    size?: 'medium' | 'large';
  };

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ children, className, size, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        'section',
        {
          [`is-${size}`]: size
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

Section.defaultProps = {
  ...modifiers.defaultProps,
  as: 'section'
};

Section.displayName = 'Section';
