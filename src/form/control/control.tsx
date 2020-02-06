import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type ControlProps = ElementModifier & {
  expanded?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  loading?: boolean;
  size?: Sizes;
};

export const Control = React.forwardRef<HTMLElement, ControlProps>(
  ({ children, className, expanded, iconLeft, iconRight, loading, size, ...props }, ref) => (
    <Element
      ref={ref}
      {...props}
      className={clsx('control', className, {
        'has-icons-left': iconLeft,
        'has-icons-right': iconRight,
        'is-expanded': expanded,
        'is-loading': loading,
        [`is-${size}`]: size
      })}
    >
      {children}
    </Element>
  )
);

Control.defaultProps = {
  ...modifiers.defaultProps,
  expanded: false,
  iconLeft: false,
  iconRight: false,
  loading: false
};
