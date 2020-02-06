import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements/element';

type StepsTitleProps = React.PropsWithChildren<{
  className?: string;
}>;

export const StepTitle = React.forwardRef<HTMLDivElement, StepsTitleProps>(({ className, children, ...props }, ref) => (
  <Element ref={ref} {...props} className={clsx('step-title', className)}>
    {children}
  </Element>
));
