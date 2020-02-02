import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../../constants';
import { Element } from '../../../elements/element';

type StepsItemProps = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  color?: Colors;
  status?: 'completed' | 'active';
}>;
export const StepItem: React.FunctionComponent<StepsItemProps> = ({
  children,
  className,
  color,
  status,
  ...props
}: StepsItemProps) => (
  <Element
    {...props}
    className={clsx('step-item', className, {
      [`is-${color}`]: color,
      [`is-${status}`]: status
    })}>
    {children}
  </Element>
);

StepItem.defaultProps = {
  as: 'li'
};
