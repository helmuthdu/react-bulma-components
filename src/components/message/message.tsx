import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type MessageProps = ElementModifier & {
  color?: Exclude<Colors, 'light' | 'dark'>;
  light?: boolean;
  dark?: boolean;
  size?: Sizes;
};

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ children, className, color, light, dark, size, ...props }, ref) => (
    <Element
      ref={ref}
      {...props}
      className={clsx('message', className, {
        'is-dark': dark,
        'is-light': light,
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
