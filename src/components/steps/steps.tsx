import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import { Element } from '../../elements';
import { StepDetails } from './step-details';
import { StepItem } from './step-item';
import { StepMark } from './step-mark';
import { StepTitle } from './step-title';

type StepsProps = React.PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  size?: Sizes;
  className?: string;
}>;

export const Steps: React.FunctionComponent<StepsProps> & {
  Details: typeof StepDetails;
  Item: typeof StepItem;
  Mark: typeof StepMark;
  Title: typeof StepTitle;
} = ({ className, children, size, ...props }: StepsProps) => (
  <Element
    {...props}
    className={clsx('steps', className, {
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Steps.Details = StepDetails;
Steps.Item = StepItem;
Steps.Mark = StepMark;
Steps.Title = StepTitle;

Steps.defaultProps = {
  as: 'ul'
};
