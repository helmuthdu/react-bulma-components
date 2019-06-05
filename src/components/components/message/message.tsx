import cn from 'classnames';
import React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../elements';
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
    className={cn('message', className, {
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
  renderAs: 'article'
};
