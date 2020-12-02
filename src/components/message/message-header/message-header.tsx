import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type MessageHeaderProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const MessageHeader = React.forwardRef<HTMLDivElement, MessageHeaderProps>(
  ({ children, className, ...props }, ref) => (
    <Element ref={ref} className={clsx('message-header', className)} {...props}>
      {children}
    </Element>
  )
);

MessageHeader.defaultProps = {
  ...modifiers.defaultProps,
  as: 'header'
};

MessageHeader.displayName = 'MessageHeader';
