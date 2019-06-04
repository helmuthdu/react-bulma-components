import cn from 'classnames';
import React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';
import { MessageBody, MessageHeader } from './components';

type MessageProps = Partial<Modifiers> & {
  color?: Colors;
  size?: Sizes;
};

export const Message: React.FunctionComponent<MessageProps> = ({
  children,
  className,
  color,
  size,
  ...props
}: MessageProps) => (
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

(Message as any).Body = MessageBody;
(Message as any).Header = MessageHeader;

Message.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'article'
};
