import clsx from 'clsx';
import * as React from 'react';
import { Scale } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

export type ImageProps = ElementModifier & {
  alt?: string;
  fallbackSrc?: string;
  fullWidth?: boolean;
  rounded?: boolean;
  size?: Scale;
  src?: string;
} & Omit<React.ComponentProps<'figure'>, 'ref' | 'size' | 'unselectable'>;

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ alt, className, fallbackSrc, fullWidth, rounded, size, src, ...props }, ref) => {
    if (!ref) {
      ref = React.createRef<HTMLImageElement>();
    }

    const getImage = (includeFallback: boolean = false) => {
      const placeholderImage = `https://dummyimage.com/${
        size
          ? Number.isInteger(size as any)
            ? `${size}x${size}`
            : `360x${(size as string).replace(/by/, ':')}`
          : '640x360'
      }/ccc/969696`;
      return (includeFallback ? fallbackSrc || placeholderImage : false) || src || placeholderImage;
    };

    const handleError = () => {
      // @ts-ignore
      ref.current.src = getImage(true);
    };

    return (
      <Element
        as="figure"
        className={clsx('image', className, {
          'is-fullwidth': fullWidth,
          [`is-${Number.isInteger(size as any) ? `${size}x${size}` : size}`]: size
        })}
        {...props}>
        <img ref={ref} alt={alt} onError={handleError} src={getImage()} className={clsx({ 'is-rounded': rounded })} />
      </Element>
    );
  }
);

Image.defaultProps = {
  ...modifiers.defaultProps,
  fullWidth: false,
  rounded: false
};
