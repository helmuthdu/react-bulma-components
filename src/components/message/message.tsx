import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type MessageProps = ElementModifier & {
  color?: Colors;
  size?: Sizes;
};

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ children, className, color, size, ...props }, ref) => (
    <Element
      ref={ref}
      {...props}
      className={clsx('message', className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size
      })}
    >
      {children}
    </Element>
  )
);

Message.defaultProps = {
  ...modifiers.defaultProps,
  as: 'article'
};
