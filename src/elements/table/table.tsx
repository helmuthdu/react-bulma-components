import clsx from 'clsx';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type TableProps = Omit<React.ComponentPropsWithRef<'table'>, 'unselectable'> &
  ElementModifier & {
    bordered?: boolean;
    fullwidth?: boolean;
    hoverable?: boolean;
    loading?: boolean;
    narrow?: boolean;
    striped?: boolean;
    vcentered?: boolean;
  };

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ bordered, children, className, fullwidth, hoverable, loading, narrow, striped, vcentered, ...props }, ref) => (
    <div
      className={clsx('table-container', {
        'is-loading': loading
      })}>
      <div className="table-wrapper">
        <Element
          ref={ref}
          as="table"
          className={clsx(
            'table',
            {
              'is-bordered': bordered,
              'is-fullwidth': fullwidth,
              'is-hoverable': hoverable,
              'is-narrow': narrow,
              'is-striped': striped,
              'is-vcentered': vcentered
            },
            className
          )}
          {...props}>
          {children}
        </Element>
      </div>
    </div>
  )
);

Table.defaultProps = {
  ...modifiers.defaultProps,
  striped: false,
  hoverable: false,
  bordered: false
};

Table.displayName = 'Table';
