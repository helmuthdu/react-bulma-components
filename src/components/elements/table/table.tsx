import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../element';

type TableProps = ElementModifier & {
  bordered?: boolean;
  fullwidth?: boolean;
  hoverable?: boolean;
  narrow?: boolean;
  striped?: boolean;
} & Omit<React.ComponentProps<'table'>, 'unselectable'>;

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
    className={cn('table', className, {
      'is-bordered': bordered,
      'is-fullwidth': fullwidth,
      'is-hoverable': hoverable,
      'is-narrow': narrow,
      'is-striped': striped
    })}
    {...props}
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
