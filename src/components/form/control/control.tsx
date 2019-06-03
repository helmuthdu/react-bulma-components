import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

type ControlProps = Partial<Modifiers> & {
  fullwidth?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
  loading?: boolean;
  size?: any;
};

export const Control: React.FunctionComponent<ControlProps> = ({
  children,
  className,
  fullwidth,
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
      'is-expanded': fullwidth,
      'is-loading': loading,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Control.defaultProps = {
  ...modifiers.defaultProps,
  fullwidth: false,
  iconLeft: false,
  iconRight: false,
  loading: false,
  renderAs: 'div'
};
