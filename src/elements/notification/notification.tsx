import cn from 'classnames';
import React from 'react';
import { Colors } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type NotificationProps = ElementModifier & {
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
