import cn from 'classnames';
import * as React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';

type TextareaProps = Partial<Modifiers> & {
  color?: Colors;
  disabled?: boolean;
  name?: string;
  onChange: (...args: any[]) => any;
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
  ...allProps
}: TextareaProps) => {
  const props = modifiers.clean(allProps);
  return (
    <textarea
      {...props}
      disabled={disabled}
      name={name}
      placeholder={placeholder}
      readOnly={readOnly}
      rows={rows}
      value={value}
      className={cn('textarea', modifiers.getClassName(allProps), className, {
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
