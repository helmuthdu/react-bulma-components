import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type MessageHeaderProps = ElementModifier;

export const MessageHeader: React.FunctionComponent<MessageHeaderProps> = ({
  children,
  className,
  ...props
}: MessageHeaderProps) => (
  <Element {...props} className={clsx('message-header', className)}>
    {children}
  </Element>
);

MessageHeader.defaultProps = {
  ...modifiers.defaultProps
};
