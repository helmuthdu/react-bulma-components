import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type MessageHeaderProps = ElementModifier;

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
