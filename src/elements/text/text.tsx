import clsx from 'clsx';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type TextProps = ElementModifier & Omit<React.ComponentProps<'p'>, 'ref' | 'unselectable'>;

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} {...props} className={clsx(className)}>
    {children}
  </Element>
));

Text.defaultProps = {
  ...modifiers.defaultProps,
  as: 'p'
};
