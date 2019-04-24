import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../element';
import { Tags } from './components/tags';

const colors = Object.values(CONSTANTS.COLORS);

export const Tag = ({ children, className, color, close, size, ellipsis, rounded, remove, onClick, ...props }) => (
  <Element
    {...props}
    onClick={() => remove && onClick()}
    data-testid="tag"
    className={cn('tag', className, {
      'is-delete': remove,
      'is-rounded': rounded,
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
  >
    {!remove && <span className={cn({ 'has-ellipsis': ellipsis })}>{children}</span>}
    {!remove && close && <button onClick={onClick} className="delete is-small" data-testid="tag-delete" />}
  </Element>
);

Tag.Group = Tags;

Tag.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  close: PropTypes.bool,
  color: PropTypes.oneOf(colors),
  ellipsis: PropTypes.bool,
  onClick: PropTypes.func,
  remove: PropTypes.bool,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large']),
  style: PropTypes.object
};

Tag.defaultProps = {
  ...modifiers.defaultProps,
  close: false,
  ellipsis: false,
  onClick: () => {},
  remove: false,
  renderAs: 'span',
  rounded: false
};
