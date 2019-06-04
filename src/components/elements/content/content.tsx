import cn from 'classnames';
import React from 'react';
import { Sizes } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../element';

type ContentProps = Partial<Modifiers> & {
  size?: Sizes;
};

export const Content: React.FunctionComponent<ContentProps> = ({
  children,
  className,
  size,
  ...props
}: ContentProps) => (
  <Element
    {...props}
    className={cn('content', className, {
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Content.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
