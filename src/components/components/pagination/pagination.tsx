import cn from 'classnames';
import React from 'react';
import ReactPaginate from 'react-paginate';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

type PaginationProps = Partial<Modifiers> & {
  autoHide?: boolean;
  current?: number;
  delta?: number;
  next?: React.ReactNode;
  onChange?: (...args: any[]) => any;
  position?: 'centered' | 'right';
  previous?: React.ReactNode;
  rounded?: boolean;
  showPrevNext?: boolean;
  size?: any;
  total?: number;
};

export const Pagination: React.FunctionComponent<PaginationProps> = ({
  className,
  current,
  delta,
  next,
  onChange,
  position,
  previous,
  rounded,
  showPrevNext,
  size,
  total,
  ...props
}: PaginationProps) => (
  <Element
    {...props}
    className={cn('pagination', className, {
      [`is-rounded`]: rounded,
      [`is-${size}`]: size,
      [`is-${position}`]: position
    })}
    aria-label="pagination"
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
);
Pagination.defaultProps = {
  ...modifiers.defaultProps,
  current: 0,
  delta: 5,
  next: 'Next',
  onChange: () => {},
  previous: 'Previous',
  rounded: false,
  showPrevNext: false,
  total: 1
};
