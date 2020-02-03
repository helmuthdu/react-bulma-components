import clsx from 'clsx';
import * as React from 'react';
import { Colors } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../element';

type TagProps = ElementModifier & {
  close?: boolean;
  color?: Colors;
  ellipsis?: boolean;
  light?: boolean;
  onClick?: (...args: any[]) => any;
  remove?: boolean;
  rounded?: boolean;
  size?: 'medium' | 'large';
} & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const Tag: React.FunctionComponent<TagProps> = ({
  children,
  className,
  close,
  color,
  ellipsis,
  light,
  onClick,
  remove,
  rounded,
  size,
  testId,
  ...props
}: TagProps) => (
  // @ts-ignore
  <Element
    data-testid={remove ? testId : undefined}
    onClick={() => remove && onClick && onClick()}
    className={clsx('tag', className, {
      'is-delete': remove,
      'is-light': light,
      'is-rounded': rounded,
      [`is-${color}`]: color,
      [`is-${size}`]: size
    })}
    {...props}
  >
    {!remove && <span className={clsx({ 'has-ellipsis': ellipsis })}>{children}</span>}
    {!remove && close && <button data-testid={testId} onClick={onClick} className="delete is-small" />}
  </Element>
);

Tag.defaultProps = {
  ...modifiers.defaultProps,
  close: false,
  ellipsis: false,
  remove: false,
  rounded: false
};
