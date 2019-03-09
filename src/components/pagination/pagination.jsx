import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';
import { Element } from '../element';

export const Pagination = ({
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
}) => (
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
      previousLabel={showPrevNext && previous}
      previousLinkClassName={showPrevNext ? 'pagination-previous' : ''}
      nextLabel={showPrevNext && next}
      nextLinkClassName={showPrevNext ? 'pagination-next' : ''}
      breakLinkClassName={'pagination-ellipsis'}
      activeLinkClassName={'is-current'}
      pageCount={total}
      forcePage={current}
      marginPagesDisplayed={2}
      pageRangeDisplayed={delta}
      onPageChange={onChange}
      pageLinkClassName={'pagination-link'}
      containerClassName={'pagination-list'}
      activeClassName={'active'}
    />
  </Element>
);

Pagination.propTypes = {
  ...modifiers.propTypes,
  autoHide: PropTypes.bool,
  className: PropTypes.string,
  current: PropTypes.number,
  delta: PropTypes.number,
  next: PropTypes.node,
  onChange: PropTypes.func,
  position: PropTypes.oneOf(['centered', 'right']),
  previous: PropTypes.node,
  rounded: PropTypes.bool,
  showPrevNext: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  total: PropTypes.number
};

Pagination.defaultProps = {
  ...modifiers.defaultProps,
  current: 0,
  delta: 5,
  next: 'Next',
  onChange: () => {},
  previous: 'Previous',
  renderAs: 'nav',
  rounded: false,
  showPrevNext: false,
  total: 1
};
