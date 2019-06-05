import cn from 'classnames';
import React from 'react';
import { Colors } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../element';

export * from './tags';

type TagProps = Partial<Modifiers> & {
  close?: boolean;
  color?: Colors;
  ellipsis?: boolean;
  onClick?: (...args: any[]) => any;
  remove?: boolean;
  rounded?: boolean;
  size?: 'medium' | 'large';
};

export const Tag: React.FunctionComponent<TagProps> = ({
  children,
  className,
  color,
  close,
  size,
  ellipsis,
  rounded,
  remove,
  onClick,
  ...props
}: TagProps) => (
  // @ts-ignore
  <Element
    {...props}
    onClick={() => remove && onClick && onClick()}
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

Tag.defaultProps = {
  ...modifiers.defaultProps,
  close: false,
  ellipsis: false,
  onClick: () => {},
  remove: false,
  renderAs: 'span',
  rounded: false
};
