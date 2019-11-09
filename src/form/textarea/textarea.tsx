import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

type TextareaProps = ElementModifier & {
  color?: Colors;
  readOnly?: boolean;
  rows?: number;
  size?: Sizes;
  value?: string | number;
} & Omit<React.ComponentProps<'textarea'>, 'color' | 'size' | 'unselectable'>;

export const Textarea: React.FunctionComponent<TextareaProps> = ({
  className,
  color,
  disabled,
  name,
  placeholder,
  readOnly,
  rows,
  size,
  value,
  ...rest
}: TextareaProps) => {
  const props = modifiers.clean(rest);
  return (
    <textarea
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      rows={rows}
      value={value}
      className={clsx('textarea', modifiers.getClassName(rest), className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size
      })}
      {...props}
    />
  );
};

Textarea.defaultProps = {
  ...modifiers.defaultProps,
  rows: 4
};
