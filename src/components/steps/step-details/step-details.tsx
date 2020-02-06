import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements/element';

type StepsDetailProps = React.PropsWithChildren<{
  className?: string;
}>;

export const StepDetails = React.forwardRef<HTMLDivElement, StepsDetailProps>(
  ({ className, children, ...props }, ref) => (
    <Element ref={ref} {...props} className={clsx('step-details', className)}>
      {children}
    </Element>
  )
);
