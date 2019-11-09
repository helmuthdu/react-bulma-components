import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';
import { MessageBody } from './message-body';
import { MessageHeader } from './message-header';

type MessageProps = ElementModifier & {
  color?: Colors;
  size?: Sizes;
};

export const Message: React.FunctionComponent<MessageProps> & {
  Body: typeof MessageBody;
  Header: typeof MessageHeader;
} = ({ children, className, color, size, ...props }: MessageProps) => (
  <Element
    {...props}
    className={clsx('message', className, {
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Message.Body = MessageBody;
Message.Header = MessageHeader;

Message.defaultProps = {
  ...modifiers.defaultProps,
  as: 'article'
};
