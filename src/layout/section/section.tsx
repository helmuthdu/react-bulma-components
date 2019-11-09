import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

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
      className={clsx('section', className, modifiers.getClassName(rest), {
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
  as: 'section'
};
