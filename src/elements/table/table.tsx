import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type TableProps = ElementModifier & {
  bordered?: boolean;
  fullwidth?: boolean;
  hoverable?: boolean;
  loading?: boolean;
  narrow?: boolean;
  striped?: boolean;
} & Omit<React.ComponentProps<'table'>, 'unselectable'>;

export const Table: React.FunctionComponent<TableProps> = ({
  bordered,
  children,
  className,
  fullwidth,
  hoverable,
  loading,
  narrow,
  striped,
  ...props
}: TableProps) => (
  <div
    className={cn('table-container', {
      'is-loading': loading
    })}
  >
    <div className="table-wrapper">
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
    </div>
  </div>
);

Table.defaultProps = {
  ...modifiers.defaultProps,
  striped: false,
  hoverable: false,
  bordered: false
};
