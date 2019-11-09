import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type ContentProps = ElementModifier & {
  size?: Sizes;
  type?: 'is-lower-alpha' | 'is-lower-roman' | 'is-upper-alpha' | 'is-upper-roman';
};

export const Content: React.FunctionComponent<ContentProps> = ({
  children,
  className,
  size,
  type,
  ...rest
}: ContentProps) => {
  const props = modifiers.clean(rest);
  return (
    <Element
      {...props}
      className={clsx('content', className, modifiers.getClassName(rest), {
        [`is-${size}`]: size,
        [`is-${type}`]: type
      })}
    >
      {children}
    </Element>
  );
};

Content.defaultProps = {
  ...modifiers.defaultProps
};
