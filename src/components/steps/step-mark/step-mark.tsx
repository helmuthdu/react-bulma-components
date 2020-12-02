import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type StepsMarkProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const StepMark = React.forwardRef<HTMLDivElement, StepsMarkProps>(({ className, children, ...props }, ref) => (
  <Element ref={ref} className={clsx('step-marker', className)} {...props}>
    {children}
  </Element>
));

StepMark.defaultProps = {
  ...modifiers.defaultProps
};

StepMark.displayName = 'StepMark';
