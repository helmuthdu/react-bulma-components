import cn from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CONSTANTS from '../../../constants';
import modifiers from '../../../modifiers';
import { Element } from '../../elements';

const colors = Object.values(CONSTANTS.COLORS);

export const InputFile = ({
  boxed,
  className,
  color,
  fullwidth,
  hasName,
  icon,
  label,
  name,
  onChange,
  right,
  size,
  style,
  ...props
}) => {
  const [fileName, setFileName] = useState(null);

  const handleSelect = event => {
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
          className="file-input"
          data-testid="file-input"
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

InputFile.propTypes = {
  ...modifiers.propTypes,
  boxed: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  fullwidth: PropTypes.bool,
  hasName: PropTypes.bool,
  icon: PropTypes.element,
  label: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  right: PropTypes.bool,
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object
};

InputFile.defaultProps = {
  ...modifiers.defaultProps,
  hasName: true,
  fullwidth: false,
  right: false,
  boxed: false,
  label: 'Choose a file...'
};
