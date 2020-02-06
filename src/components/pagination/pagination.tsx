import clsx from 'clsx';
import * as React from 'react';
import ReactPaginate from 'react-paginate';
import { Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type PaginationProps = ElementModifier & {
  autoHide?: boolean;
  current?: number;
  delta?: number;
  next?: React.ReactNode;
  onChange?: (...args: any[]) => void;
  position?: 'centered' | 'right';
  previous?: React.ReactNode;
  rounded?: boolean;
  showPrevNext?: boolean;
  size?: Sizes;
  total?: number;
} & Omit<React.ComponentProps<'nav'>, 'ref' | 'size' | 'onChange' | 'unselectable'>;

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    { className, current, delta, next, onChange, position, previous, rounded, showPrevNext, size, total, ...props },
    ref
  ) => (
    <Element
      ref={ref}
      className={clsx('pagination', className, {
        [`is-rounded`]: rounded,
        [`is-${size}`]: size,
        [`is-${position}`]: position
      })}
      aria-label="pagination"
      {...props}
    >
      <ReactPaginate
        activeClassName={'active'}
        activeLinkClassName={'is-current'}
        breakLinkClassName={'pagination-ellipsis'}
        containerClassName={'pagination-list'}
        forcePage={current}
        marginPagesDisplayed={2}
        nextLabel={showPrevNext && next}
        nextLinkClassName={showPrevNext ? 'pagination-next' : ''}
        onPageChange={onChange}
        pageCount={total as number}
        pageLinkClassName={'pagination-link'}
        pageRangeDisplayed={delta as number}
        previousLabel={showPrevNext && previous}
        previousLinkClassName={showPrevNext ? 'pagination-previous' : ''}
      />
    </Element>
  )
);

Pagination.defaultProps = {
  ...modifiers.defaultProps,
  as: 'nav',
  current: 0,
  delta: 5,
  next: 'Next',
  onChange: () => {},
  previous: 'Previous',
  rounded: false,
  showPrevNext: false,
  total: 1
};
