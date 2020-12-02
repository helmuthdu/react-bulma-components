import clsx from 'clsx';
import * as React from 'react';
import { Colors, Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

const { useState } = React;

type InputFileProps = Omit<React.ComponentPropsWithRef<'input'>, 'size' | 'unselectable'> &
  ElementModifier & {
    accept?: string;
    boxed?: boolean;
    capture?: string;
    color?: Colors;
    fullwidth?: boolean;
    hasName?: boolean;
    icon?: React.ReactNode;
    label?: string;
    multiple?: boolean;
    right?: boolean;
    size?: Sizes;
    inputProps?: {
      accept?: string;
      capture?: string;
      multiple?: boolean;
    };
  };

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
    const [fileName, setFileName] = useState(undefined);

    const handleSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { files }: any = event.target;
      setFileName(files?.length > 0 ? files[0]?.name : undefined);
      if (onChange) {
        onChange(event);
      }
    };

    return (
      <Element
        style={style}
        className={clsx(
          'file',
          {
            'has-name': !hasName,
            'is-boxed': boxed,
            'is-fullwidth': fullwidth,
            'is-right': right,
            [`is-${color}`]: color,
            [`is-${size}`]: size
          },
          className
        )}
        {...props}>
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

InputFile.displayName = 'InputFile';
