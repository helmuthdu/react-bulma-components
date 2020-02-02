import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import { Element } from '../../elements';
import { StepsItem } from './steps-item';
import { StepsMark } from './steps-mark';

type StepsProps = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  size?: Sizes;
  className?: string;
}>;

export const Steps: React.FunctionComponent<StepsProps> & {
  Item: typeof StepsItem,
  Mark: typeof StepsMark,
} = ({ className, children, size, ...props }: StepsProps) => (
  <Element
    {...props}
    className={clsx('steps', className, {
      [`is-${size}`]: size
    })}>
    {children}
  </Element>
);

Steps.Item = StepsItem;
Steps.Mark = StepsMark;

Steps.defaultProps = {
  as: 'ul'
};

