import cn from 'classnames';
import React from 'react';
import { Colors } from '../../../constants';
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
  size?: any;
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
}: any) => {
  const props = modifiers.clean(allProps);
  const iconSizeOf = iconSize ? (iconSizes as any)[pack][iconSize] : size ? (iconSizes as any)[pack][size] : undefined;
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
