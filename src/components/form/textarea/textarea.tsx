import cn from 'classnames';
import * as React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';

type TextareaProps = Partial<Omit<React.ComponentProps<'textarea'>, 'color' | 'unselectable'>> &
  ElementModifier & {
    color?: Colors;
    disabled?: boolean;
    name?: string;
    onChange: (...args: any[]) => void;
    placeholder?: string;
    readOnly?: boolean;
    rows?: number;
    size?: Sizes;
    value?: string | number;
  };

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
      {...props}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      rows={rows}
      value={value}
      className={cn('textarea', modifiers.getClassName(rest), className, {
        [`is-${color}`]: color,
        [`is-${size}`]: size
      })}
    />
  );
};

Textarea.defaultProps = {
  ...modifiers.defaultProps,
  rows: 4
};
