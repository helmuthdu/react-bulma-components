import clsx from 'clsx';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type TextProps = Omit<React.ComponentPropsWithRef<'p'>, 'unselectable'> & ElementModifier;

export const Text = React.forwardRef<HTMLParagraphElement, TextProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} className={clsx(className)} {...props}>
    {children}
  </Element>
));

Text.defaultProps = {
  ...modifiers.defaultProps,
  as: 'p'
};

Text.displayName = 'Text';
