import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type TabProps = Omit<React.ComponentPropsWithRef<'li'>, 'unselectable'> &
  ElementModifier & {
    active?: boolean;
  };

export const Tab = React.forwardRef<HTMLLIElement, TabProps>(
  ({ children, className, style, active, ...props }, ref) => (
    <li
      ref={ref}
      style={style}
      className={clsx(
        {
          'is-active': active
        },
        className
      )}>
      <Element {...props}>{children}</Element>
    </li>
  )
);

Tab.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  as: 'a'
};

Tab.displayName = 'Tab';
