import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../element';

type TableProps = Partial<Omit<React.ComponentProps<'table'>, 'unselectable'>> &
  ElementModifier & {
    bordered?: boolean;
    fullwidth?: boolean;
    hoverable?: boolean;
    narrow?: boolean;
    striped?: boolean;
  };

export const Table: React.FunctionComponent<TableProps> = ({
  bordered,
  children,
  className,
  fullwidth,
  hoverable,
  narrow,
  striped,
  ...props
}: TableProps) => (
  <Element
    renderAs="table"
    {...props}
    className={cn('table', className, {
      'is-bordered': bordered,
      'is-fullwidth': fullwidth,
      'is-hoverable': hoverable,
      'is-narrow': narrow,
      'is-striped': striped
    })}
  >
    {children}
  </Element>
);

Table.defaultProps = {
  ...modifiers.defaultProps,
  striped: false,
  hoverable: false,
  bordered: false
};
