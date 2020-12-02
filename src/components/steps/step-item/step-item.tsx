import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../../constants';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type StepsItemProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    active?: boolean;
    color?: Colors;
    completed?: boolean;
  };

export const StepItem = React.forwardRef<HTMLLIElement, StepsItemProps>(
  ({ active, children, className, color, completed, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        'step-item',
        {
          'is-active': active,
          'is-completed': completed,
          [`is-${color}`]: color
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

StepItem.defaultProps = {
  ...modifiers.defaultProps,
  as: 'li'
};

StepItem.displayName = 'StepItem';
