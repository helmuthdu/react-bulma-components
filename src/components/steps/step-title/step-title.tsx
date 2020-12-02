import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type StepsTitleProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const StepTitle = React.forwardRef<HTMLDivElement, StepsTitleProps>(({ className, children, ...props }, ref) => (
  <Element ref={ref} className={clsx('step-title', className)} {...props}>
    {children}
  </Element>
));

StepTitle.defaultProps = {
  ...modifiers.defaultProps
};

StepTitle.displayName = 'StepTitle';
