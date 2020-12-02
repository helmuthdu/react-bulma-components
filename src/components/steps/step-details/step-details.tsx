import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type StepsDetailProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const StepDetails = React.forwardRef<HTMLDivElement, StepsDetailProps>(
  ({ className, children, ...props }, ref) => (
    <Element ref={ref} className={clsx('step-details', className)} {...props}>
      {children}
    </Element>
  )
);

StepDetails.defaultProps = {
  ...modifiers.defaultProps
};

StepDetails.displayName = 'StepDetails';
