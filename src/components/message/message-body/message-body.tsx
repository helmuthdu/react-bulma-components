import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type MessageBodyProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const MessageBody = React.forwardRef<HTMLDivElement, MessageBodyProps>(
  ({ children, className, ...props }, ref) => (
    <Element ref={ref} className={clsx('message-body', className)} {...props}>
      {children}
    </Element>
  )
);

MessageBody.defaultProps = {
  ...modifiers.defaultProps
};

MessageBody.displayName = 'MessageBody';
