import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../element';

type TableProps = Partial<Modifiers> & {
  bordered?: boolean;
  size?: 'fullwidth' | 'narrow';
  striped?: boolean;
  hoverable?: boolean;
};

export const Table: React.FunctionComponent<TableProps> = ({
  children,
  className,
  hoverable,
  size,
  striped,
  bordered,
  ...props
}: TableProps) => (
  <Element
    renderAs="table"
    {...props}
    className={cn('table', className, {
      'is-bordered': bordered,
      'is-hoverable': hoverable,
      'is-striped': striped,
      [`is-${size}`]: size
    })}
  >
    {children}
  </Element>
);

Table.defaultProps = {
  ...modifiers.defaultProps,
  size: 'fullwidth',
  striped: true,
  hoverable: false,
  bordered: false
};
