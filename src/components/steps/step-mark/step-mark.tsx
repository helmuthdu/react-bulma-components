import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements/element';

type StepsMarkProps = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
}>;

export const StepMark = React.forwardRef<HTMLDivElement, StepsMarkProps>(({ className, children, ...props }, ref) => (
  <Element ref={ref} {...props} className={clsx('step-marker', className)}>
    {children}
  </Element>
));
