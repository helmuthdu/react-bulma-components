import cn from 'classnames';
import * as React from 'react';
import { useState } from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

type InputFileProps = Partial<Modifiers> & {
  accept?: string;
  boxed?: boolean;
  capture?: string;
  color?: Colors;
  fullwidth?: boolean;
  hasName?: boolean;
  icon?: string | React.ReactNode;
  label?: string;
  multiple?: boolean;
  name?: string;
  onChange: (...args: any[]) => any;
  right?: boolean;
  size?: Sizes;
};

export const InputFile: React.FunctionComponent<InputFileProps> = ({
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
}: InputFileProps) => {
  const [fileName, setFileName] = useState(null);
  const handleSelect = (event: React.SyntheticEvent) => {
    // @ts-ignore
    const { files } = event.target;
    setFileName(files.length > 0 ? files[0].name : undefined);
    if (onChange) {
      onChange(event);
    }
  };
  return (
    <Element
      style={style}
      {...props}
      className={cn('file', className, {
        'has-name': !hasName,
        'is-boxed': boxed,
        'is-fullwidth': fullwidth,
        'is-right': right,
        [`is-${color}`]: color,
        [`is-${size}`]: size
      })}
    >
      <label className="file-label">
        <input
          accept={accept}
          capture={capture}
          className="file-input"
          data-testid="file-input"
          multiple={multiple}
          name={name}
          onChange={handleSelect}
          type="file"
          value=""
        />
        <span className="file-cta">
          {icon && <span className="file-icon">{icon}</span>}
          <span className="file-label">{label}</span>
        </span>
        {hasName && fileName && (
          <span data-testid="file-name" className="file-name">
            {fileName}
          </span>
        )}
      </label>
    </Element>
  );
};

InputFile.defaultProps = {
  ...modifiers.defaultProps,
  hasName: true,
  fullwidth: false,
  right: false,
  boxed: false,
  label: 'Choose a file...'
};
