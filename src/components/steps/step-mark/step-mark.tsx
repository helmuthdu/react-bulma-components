import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements/element';

type StepsMarkProps = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
}>;

export const StepMark: React.FunctionComponent<StepsMarkProps> = ({
  className,
  children,
  ...props
}: StepsMarkProps) => (
  <Element {...props} className={clsx('step-marker', className)}>
    {children}
  </Element>
);

StepMark.defaultProps = {};
