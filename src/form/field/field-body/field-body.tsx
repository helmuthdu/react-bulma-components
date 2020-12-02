import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type FieldBodyProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const FieldBody = React.forwardRef<HTMLElement, FieldBodyProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} {...props} className={clsx('field-body', className)}>
    {children}
  </Element>
));

FieldBody.defaultProps = {
  ...modifiers.defaultProps
};

FieldBody.displayName = 'FieldBody';
