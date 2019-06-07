import cn from 'classnames';
import React from 'react';
import { Colors } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';

const iconSizes = {
  mdi: {
    small: '18px',
    normal: '24px',
    medium: '36px',
    large: '48px'
  },
  fas: {
    small: '',
    normal: 'fa-lg',
    medium: 'fa-2x',
    large: 'fa-3x'
  }
};

type IconProps = Partial<Omit<React.ComponentProps<'i'>, 'color' | 'unselectable'>> &
  ElementModifier & {
    align?: 'left' | 'right';
    border?: boolean;
    color?: Colors;
    icon?: string;
    inactive?: boolean;
    pack?: 'mdi' | 'fas';
    size?: 'small' | 'normal' | 'medium' | 'large';
    type?: 'light' | 'dark';
    spinner?: boolean;
  };

export const Icon: React.FunctionComponent<IconProps> = ({
  align,
  border,
  children,
  className,
  color,
  icon,
  inactive,
  pack,
  size,
  spinner,
  type,
  ...rest
}: IconProps) => {
  const props = modifiers.clean(rest);
  // @ts-ignore
  const iconSize = iconSizes[pack][size];
  const iconPack =
    pack === 'mdi'
      ? cn('mdi', {
          [`mdi-${icon}`]: icon,
          [`mdi-${inactive}`]: inactive,
          [`mdi-${type}`]: type,
          [`mdi-${iconSize}`]: iconSize
        })
      : pack === 'fas'
      ? cn('fas', {
          'fa-border': border,
          'fa-spinner': spinner,
          [`fa-${icon}`]: icon,
          [`fa-${iconSize}`]: iconSize
        })
      : '';
  return (
    <span
      {...props}
      className={cn('icon', className, modifiers.getClassName(rest), {
        [`is-${size}`]: size,
        [`is-${align}`]: align,
        [`has-text-${color}`]: color
      })}
    >
      {children || <i className={iconPack} />}
    </span>
  );
};

Icon.defaultProps = {
  ...modifiers.defaultProps,
  icon: '',
  size: 'normal',
  pack: 'mdi'
};
