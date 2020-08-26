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

type IconProps = ElementModifier & {
  align?: 'left' | 'right';
  border?: boolean;
  color?: Colors | Greyscale;
  icon?: string;
  inactive?: boolean;
  pack?: 'mdi' | 'fas';
  size?: 'small' | 'normal' | 'medium' | 'large';
  type?: 'light' | 'dark';
  spinner?: boolean;
} & Omit<React.ComponentProps<'span'>, 'ref' | 'color' | 'size' | 'unselectable'>;

export const Icon = React.forwardRef<HTMLSpanElement, IconProps>(
  ({ align, border, children, className, color, icon, inactive, pack, size, spinner, type, ...props }, ref) => {
    // @ts-ignore
    const iconSize = iconSizes[pack][size];
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
        className={clsx('icon', className, modifiers.getClassName(props), {
          [`is-${size}`]: size,
          [`is-${align}`]: align,
          [`has-text-${color}`]: color
        })}
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
