import cn from 'classnames';
import * React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type MessageBodyProps = ElementModifier;

export const MessageBody: React.FunctionComponent<MessageBodyProps> = ({
  children,
  className,
  ...props
}: MessageBodyProps) => (
  <Element {...props} className={cn('message-body', className)}>
    {children}
  </Element>
);

MessageBody.defaultProps = {
  ...modifiers.defaultProps
};
