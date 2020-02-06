import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type MessageHeaderProps = ElementModifier;

export const MessageHeader = React.forwardRef<HTMLDivElement, MessageHeaderProps>(
  ({ children, className, ...props }, ref) => (
    <Element ref={ref} {...props} className={clsx('message-header', className)}>
      {children}
    </Element>
  )
);

MessageHeader.defaultProps = {
  ...modifiers.defaultProps
};
