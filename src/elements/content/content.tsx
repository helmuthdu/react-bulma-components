import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type ContentProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    size?: Sizes;
    type?: 'is-lower-alpha' | 'is-lower-roman' | 'is-upper-alpha' | 'is-upper-roman';
  };

export const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className, size, type, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        'content',
        {
          [`is-${size}`]: size,
          [`is-${type}`]: type
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

Content.defaultProps = {
  ...modifiers.defaultProps
};

Content.displayName = 'Content';
