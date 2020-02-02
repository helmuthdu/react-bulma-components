import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements/element';

type StepsMarkProps = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
}>;
export const StepsMark: React.FunctionComponent<StepsMarkProps> = ({
  className,
  children,
  ...props
}: StepsMarkProps) => (
  <Element {...props} className={clsx('steps-marker', className)}>
    {children}
  </Element>
);

StepsMark.defaultProps = {};
