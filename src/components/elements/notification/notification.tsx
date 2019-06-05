import cn from 'classnames';
import React from 'react';
import { Colors } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../element';

type NotificationProps = Partial<Modifiers> & {
  color?: Colors;
};

export const Notification: React.FunctionComponent<NotificationProps> = ({
  children,
  className,
  color,
  ...props
}: NotificationProps) => (
  <Element
    {...props}
    className={cn(
      'notification',
      {
        [`is-${color}`]: color
      },
      className
    )}
  >
    {children}
  </Element>
);

Notification.defaultProps = {
  ...modifiers.defaultProps
};
