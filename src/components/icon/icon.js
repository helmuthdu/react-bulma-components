import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import CONSTANTS from '../../constants';
import modifiers from '../../modifiers';

const colors = Object.values(CONSTANTS.COLORS);

const iconSizes = {
  mdi: {
    small: 'mdi-18px',
    medium: 'mdi-24px',
    large: 'mdi-36px',
    big: 'mdi-48px'
  },
  fas: {
    small: '',
    medium: 'fa-lg',
    large: 'fa-2x',
    big: 'fa-3x'
  }
};

export const Icon = ({ icon, iconSize, size, color, className, align, children, pack, ...allProps }) => {
  const props = modifiers.clean(allProps);
  const iconSizeOf = iconSize ? iconSizes[pack][iconSize] : size ? iconSizes[pack][size] : undefined;
  const iconPack =
    pack === 'mdi'
      ? cn('mdi', {
          [`mdi-${icon}`]: icon,
          [`mdi-${iconSizeOf}`]: iconSizeOf
        })
      : pack === 'fas'
      ? cn('fas', {
          [`fa-${icon}`]: icon,
          [`fa-${iconSizeOf}`]: iconSizeOf
        })
      : '';
  return (
    <span
      {...props}
      className={cn('icon', modifiers.getClassName(allProps), className, {
        [`is-${size}`]: size,
        [`is-${align}`]: align,
        [`has-text-${color}`]: color
      })}
    >
      {children || <i className={iconPack} />}
    </span>
  );
};

Icon.propTypes = {
  ...modifiers.propTypes,
  icon: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right']),
  children: PropTypes.element,
  className: PropTypes.string,
  color: PropTypes.oneOf(colors),
  iconSize: PropTypes.oneOf(['small', 'medium', 'large', 'big']),
  pack: PropTypes.oneOf(['mdi', 'fas']),
  size: PropTypes.oneOf(Object.values(CONSTANTS.SIZES)),
  style: PropTypes.object
};

Icon.defaultProps = {
  ...modifiers.defaultProps,
  icon: '',
  pack: 'mdi'
};
