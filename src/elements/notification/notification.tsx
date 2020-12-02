import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type NotificationProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    color?: Exclude<Colors, 'light' | 'dark'>;
    dark?: boolean;
    light?: boolean;
  };

export const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  ({ children, className, color, dark, light, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        'notification',
        {
          'is-dark': dark,
          'is-light': light,
          [`is-${color}`]: color
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

Notification.defaultProps = {
  ...modifiers.defaultProps
};

Notification.displayName = 'Notification';
