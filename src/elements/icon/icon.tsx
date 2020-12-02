import clsx from 'clsx';
import * as React from 'react';
import { Colors, Greyscale } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

const iconSizes = {
  mdi: {
    small: '18px',
    normal: '24px',
    medium: '36px',
    large: '48px'
  },
  fas: {
    small: '',
    normal: 'lg',
    medium: '2x',
    large: '3x'
  }
};

type IconPack = 'mdi' | 'fas';
type IconSize = 'small' | 'normal' | 'medium' | 'large';
type IconProps = Omit<React.ComponentPropsWithRef<'span'>, 'unselectable'> &
  ElementModifier & {
    align?: 'left' | 'right';
    border?: boolean;
    color?: Colors | Greyscale;
    icon?: string;
    inactive?: boolean;
    pack?: IconPack;
    size?: IconSize;
    type?: 'light' | 'dark';
    spinner?: boolean;
  };

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ align, border, children, className, color, icon, inactive, pack, size, spinner, type, ...props }, ref) => {
    const iconSize = iconSizes[pack as IconPack][size as IconSize];
    const iconPack =
      pack === 'mdi'
        ? clsx('mdi', {
            [`mdi-${icon}`]: icon,
            [`mdi-${inactive}`]: inactive,
            [`mdi-${type}`]: type,
            [`mdi-${iconSize}`]: iconSize
          })
        : pack === 'fas'
        ? clsx('fas', {
            'fa-border': border,
            'fa-spinner': spinner,
            [`fa-${icon}`]: icon,
            [`fa-${iconSize}`]: iconSize
          })
        : '';
    return (
      <span
        ref={ref}
        className={clsx(
          'icon',
          {
            [`is-${size}`]: size,
            [`is-${align}`]: align,
            [`has-text-${color}`]: color
          },
          modifiers.getClassName(props),
          className
        )}
        {...modifiers.clean(props)}>
        {children || <i className={iconPack} />}
      </span>
    );
  }
);

Icon.defaultProps = {
  ...modifiers.defaultProps,
  size: 'normal',
  pack: 'mdi'
};

Icon.displayName = 'Icon';
