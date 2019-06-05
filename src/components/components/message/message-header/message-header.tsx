import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type MessageHeaderProps = Partial<Modifiers>;

export const MessageHeader: React.FunctionComponent<MessageHeaderProps> = ({
  children,
  className,
  ...props
}: MessageHeaderProps) => (
  <Element {...props} className={cn('message-header', className)}>
    {children}
  </Element>
);

MessageHeader.defaultProps = {
  ...modifiers.defaultProps
};
