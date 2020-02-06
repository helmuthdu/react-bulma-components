import clsx from 'clsx';
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
} & Omit<React.ComponentProps<'table'>, 'ref' | 'unselectable'>;

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ bordered, children, className, fullwidth, hoverable, loading, narrow, striped, ...props }, ref) => (
    <div
      className={clsx('table-container', {
        'is-loading': loading
      })}
    >
      <div className="table-wrapper">
        <Element
          ref={ref}
          as="table"
          className={clsx('table', className, {
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
  )
);

Table.defaultProps = {
  ...modifiers.defaultProps,
  striped: false,
  hoverable: false,
  bordered: false
};
