import cn from 'classnames';
import * as React from 'react';
import { Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';

type ControlProps = ElementModifier & {
  expanded?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  loading?: boolean;
  size?: Sizes;
};

export const Control: React.FunctionComponent<ControlProps> = ({
  children,
  className,
  expanded,
  iconLeft,
  iconRight,
  loading,
  size,
  ...props
}: ControlProps) => (
  <Element
    {...props}
    className={cn('control', className, {
      'has-icons-left': iconLeft,
      'has-icons-right': iconRight,
      'is-expanded': expanded,
      'is-loading': loading,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Control.defaultProps = {
  ...modifiers.defaultProps,
  expanded: false,
  iconLeft: false,
  iconRight: false,
  loading: false
};
