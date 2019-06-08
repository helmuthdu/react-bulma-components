import cn from 'classnames';
import * as React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../elements';

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
} & Omit<React.ComponentProps<'input'>, 'color' | 'size' | 'unselectable'>;

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
  testId,
  ...props
}: InputFileProps) => {
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
      className={cn('file', className, {
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
          data-testid={(Array.isArray(testId) ? testId[0] : testId) || undefined}
          accept={accept}
          capture={capture}
          className="file-input"
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
          <span data-testid={Array.isArray(testId) ? testId[1] : undefined} className="file-name">
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
