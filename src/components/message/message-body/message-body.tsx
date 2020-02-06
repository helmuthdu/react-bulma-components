import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type MessageBodyProps = ElementModifier;

export const MessageBody = React.forwardRef<HTMLDivElement, MessageBodyProps>(
  ({ children, className, ...props }, ref) => (
    <Element ref={ref} {...props} className={clsx('message-body', className)}>
      {children}
    </Element>
  )
);

MessageBody.defaultProps = {
  ...modifiers.defaultProps
};
