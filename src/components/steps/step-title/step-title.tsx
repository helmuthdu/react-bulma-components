import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements/element';

type StepsTitleProps = React.PropsWithChildren<{
  className?: string;
}>;

export const StepTitle: React.FunctionComponent<StepsTitleProps> = ({
  className,
  children,
  ...props
}: StepsTitleProps) => (
  <Element {...props} className={clsx('step-title', className)}>
    {children}
  </Element>
);

StepTitle.defaultProps = {};
