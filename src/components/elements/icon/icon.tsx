import cn from 'classnames';
import React from 'react';
import { Colors, Sizes } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';

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

type IconProps = Partial<Modifiers> & {
  icon?: string;
  align?: 'left' | 'right';
  color?: Colors;
  iconSize?: 'small' | 'medium' | 'large' | 'big';
  pack?: 'mdi' | 'fas';
  size?: Sizes;
};

export const Icon: React.FunctionComponent<IconProps> = ({
  icon,
  iconSize,
  size,
  color,
  className,
  align,
  children,
  pack,
  ...allProps
}: IconProps) => {
  const props = modifiers.clean(allProps);
  const iconSizeOf = iconSize
    ? (iconSizes as any)[pack as any][iconSize]
    : size
    ? (iconSizes as any)[pack as any][size]
    : undefined;
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

Icon.defaultProps = {
  ...modifiers.defaultProps,
  icon: '',
  pack: 'mdi'
};
