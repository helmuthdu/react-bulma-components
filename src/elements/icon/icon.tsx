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
    normal: 'fa-lg',
    medium: 'fa-2x',
    large: 'fa-3x'
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
} & Omit<React.ComponentProps<'span'>, 'color' | 'unselectable'>;

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
      className={clsx('icon', className, modifiers.getClassName(rest), {
        [`is-${size}`]: size,
        [`is-${align}`]: align,
        [`has-text-${color}`]: color
      })}
      {...props}
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
