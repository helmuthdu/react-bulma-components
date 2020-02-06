import clsx from 'clsx';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Colors, Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

type TextareaProps = ElementModifier & {
  color?: Colors;
  readOnly?: boolean;
  rows?: number;
  size?: Sizes;
  value?: string | number;
} & Omit<React.ComponentProps<'textarea'>, 'ref' | 'color' | 'size' | 'unselectable'>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    { className, color, disabled, name, placeholder, readOnly, rows, size, value: initialValue = '', ...props },
    ref
  ) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    return (
      <textarea
        ref={ref}
        disabled={disabled}
        name={name}
        placeholder={placeholder}
        readOnly={readOnly}
        rows={rows}
        value={value}
        className={clsx('textarea', modifiers.getClassName(props), className, {
          [`is-${color}`]: color,
          [`is-${size}`]: size
        })}
        {...modifiers.clean(props)}
      />
    );
  }
);

Textarea.defaultProps = {
  ...modifiers.defaultProps,
  rows: 4
};
