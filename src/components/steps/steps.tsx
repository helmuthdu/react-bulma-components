import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import { Element } from '../../elements';

type StepsProps = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  size?: Sizes;
  className?: string;
}>;

export const Steps = React.forwardRef<HTMLUListElement, StepsProps>(({ className, children, size, ...props }, ref) => (
  <Element
    ref={ref}
    {...props}
    className={clsx('steps', className, {
      [`is-${size}`]: size
    })}>
    {children}
  </Element>
));

Steps.defaultProps = {
  as: 'ul'
};
