import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type NotificationProps = ElementModifier & {
  color?: Exclude<Colors, 'light' | 'dark'>;
  dark?: boolean;
  light?: boolean;
};

export const Notification = React.forwardRef<HTMLDivElement, NotificationProps>(
  ({ children, className, color, dark, light, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx('notification', className, {
        'is-dark': dark,
        'is-light': light,
        [`is-${color}`]: color
      })}
      {...props}
    >
      {children}
    </Element>
  )
);

Notification.defaultProps = {
  ...modifiers.defaultProps
};
