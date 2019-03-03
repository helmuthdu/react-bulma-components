import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';

export const Breadcrumb = React.forwardRef(
  ({ className, items, renderAs, hrefAttr, separator, size, align, ...allProps }, ref) => {
    const Element = renderAs;
    const props = modifiers.clean(allProps);
    return (
      <nav
        {...props}
        ref={ref}
        className={cn('breadcrumb', className, modifiers.getClassName(allProps), {
          [`has-${separator}-separator`]: separator,
          [`is-${size}`]: size,
          [`is-${align}`]: align
        })}
      >
        <ul>
          {items.map(item => {
            const p = {
              [renderAs === 'a' ? 'href' : hrefAttr]: item.url
            };
            return (
              <li
                key={item.url}
                className={cn({
                  'is-active': item.active
                })}
              >
                <Element {...p}>{item.name}</Element>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
);

Breadcrumb.propTypes = {
  ...modifiers.propTypes,
  align: PropTypes.oneOf(['right', 'center']),
  className: PropTypes.string,
  hrefAttr: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      name: PropTypes.node,
      url: PropTypes.string.isRequired
    })
  ),
  renderAs: PropTypes.oneOfType([PropTypes.oneOf(['a']), PropTypes.func]),
  separator: PropTypes.oneOf(['arrow', 'bullet', 'dot', 'succeeds']),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object
};

Breadcrumb.defaultProps = {
  ...modifiers.defaultProps,
  hrefAttr: 'href',
  items: [],
  renderAs: 'a'
};
