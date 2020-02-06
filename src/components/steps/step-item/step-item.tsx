import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../../constants';
import { Element } from '../../../elements/element';

type StepsItemProps = React.PropsWithChildren<{
  active?: boolean;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  className?: string;
  color?: Colors;
  completed?: boolean;
}>;

export const StepItem = React.forwardRef<HTMLLIElement, StepsItemProps>(
  ({ active, children, className, color, completed, ...props }, ref) => (
    <Element
      ref={ref}
      {...props}
      className={clsx('step-item', className, {
        'is-active': active,
        'is-completed': completed,
        [`is-${color}`]: color
      })}
    >
      {children}
    </Element>
  )
);

StepItem.defaultProps = {
  as: 'li'
};
