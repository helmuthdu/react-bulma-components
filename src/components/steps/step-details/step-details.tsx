import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements/element';

type StepsDetailProps = React.PropsWithChildren<{
  className?: string;
}>;
export const StepDetails: React.FunctionComponent<StepsDetailProps> = ({
  className,
  children,
  ...props
}: StepsDetailProps) => (
  <Element {...props} className={clsx('step-details', className)}>
    {children}
  </Element>
);

StepDetails.defaultProps = {};
