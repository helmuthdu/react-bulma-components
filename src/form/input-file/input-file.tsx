import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

const { useState } = React;

type InputFileProps = ElementModifier & {
  accept?: string;
  boxed?: boolean;
  capture?: string;
  color?: Colors;
  fullwidth?: boolean;
  hasName?: boolean;
  icon?: React.ReactElement<any>;
  label?: string;
  multiple?: boolean;
  right?: boolean;
  size?: Sizes;
  inputProps?: {
    accept?: string;
    capture?: string;
    multiple?: boolean;
  };
} & Omit<React.ComponentProps<'input'>, 'ref' | 'color' | 'size' | 'unselectable'>;

export const InputFile = React.forwardRef<HTMLInputElement, InputFileProps>(
  (
    {
      accept,
      boxed,
      capture,
      className,
      color,
      fullwidth,
      hasName,
      icon,
      label,
      multiple,
      name,
      onChange,
      right,
      size,
      style,
      ...props
    },
    ref
  ) => {
    const [fileName, setFileName] = useState(null);

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
      // @ts-ignore
      const { files } = event.target;
      // @ts-ignore
      setFileName(files.length > 0 ? files[0].name : undefined);
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <Element
        style={style}
        className={clsx('file', className, {
          'has-name': !hasName,
          'is-boxed': boxed,
          'is-fullwidth': fullwidth,
          'is-right': right,
          [`is-${color}`]: color,
          [`is-${size}`]: size
        })}
        {...props}
      >
        <label className="file-label">
          <input
            ref={ref}
            accept={accept}
            capture={capture}
            className="file-input"
            multiple={multiple}
            name={name}
            onChange={handleSelect}
            type="file"
          />
          <span className="file-cta">
            {icon && <span className="file-icon">{icon}</span>}
            <span className="file-label">{label}</span>
          </span>
          {hasName && fileName && <span className="file-name">{fileName}</span>}
        </label>
      </Element>
    );
  }
);

InputFile.defaultProps = {
  ...modifiers.defaultProps,
  hasName: true,
  fullwidth: false,
  right: false,
  boxed: false,
  label: 'Choose a file...'
};
