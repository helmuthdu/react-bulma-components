import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type MessageBodyProps = ElementModifier;

export const MessageBody: React.FunctionComponent<MessageBodyProps> = ({
  children,
  className,
  ...props
}: MessageBodyProps) => (
  <Element {...props} className={clsx('message-body', className)}>
    {children}
  </Element>
);

MessageBody.defaultProps = {
  ...modifiers.defaultProps
};
