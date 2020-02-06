import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type ContentProps = ElementModifier & {
  size?: Sizes;
  type?: 'is-lower-alpha' | 'is-lower-roman' | 'is-upper-alpha' | 'is-upper-roman';
} & Omit<React.ComponentProps<'div'>, 'ref' | 'size' | 'unselectable'>;

export const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ children, className, size, type, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx('content', className, modifiers.getClassName(props), {
        [`is-${size}`]: size,
        [`is-${type}`]: type
      })}
      {...modifiers.clean(props)}
    >
      {children}
    </Element>
  )
);

Content.defaultProps = {
  ...modifiers.defaultProps
};
