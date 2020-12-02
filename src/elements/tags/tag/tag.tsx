import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../element';

type TagProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    close?: boolean;
    color?: Exclude<Colors, 'light'>;
    ellipsis?: boolean;
    light?: boolean;
    onClick?: (...args: any[]) => any;
    remove?: boolean;
    rounded?: boolean;
    size?: Exclude<Sizes, 'small'>;
  };

export const Tag = React.forwardRef<HTMLDivElement, TagProps>(
  ({ children, className, close, color, ellipsis, light, onClick, remove, rounded, size, ...props }, ref) => (
    <Element
      ref={ref}
      onClick={() => remove && onClick && onClick()}
      className={clsx(
        'tag',
        {
          'is-delete': remove,
          'is-light': light,
          'is-rounded': rounded,
          [`is-${color}`]: color,
          [`is-${size}`]: size
        },
        className
      )}
      {...props}>
      {!remove && <span className={clsx({ 'has-ellipsis': ellipsis })}>{children}</span>}
      {!remove && close && <button onClick={onClick} className="delete is-small" />}
    </Element>
  )
);

Tag.defaultProps = {
  ...modifiers.defaultProps,
  close: false,
  ellipsis: false,
  remove: false,
  rounded: false
};

Tag.displayName = 'Tag';
