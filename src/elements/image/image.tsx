import clsx from 'clsx';
import * as React from 'react';
import { Scale } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

export type ImageProps = Omit<React.ComponentPropsWithRef<'figure'>, 'unselectable'> &
  ElementModifier & {
    alt?: string;
    fallbackSrc?: string;
    fullWidth?: boolean;
    rounded?: boolean;
    size?: Scale;
    src?: string;
  };

export const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  ({ alt, className, fallbackSrc, fullWidth, rounded, size, src, ...props }, ref) => {
    if (!ref) {
      ref = React.createRef<HTMLImageElement>();
    }

    const getImage = (includeFallback?: boolean) => {
      const placeholderImage = `https://dummyimage.com/${
        size ? (Number.isInteger(size) ? `${size}x${size}` : `360x${(size as string).replace(/by/, ':')}`) : '640x360'
      }/ccc/969696`;
      return (includeFallback ? fallbackSrc || placeholderImage : false) || src || placeholderImage;
    };

    const handleError = () => {
      (ref as React.RefObject<any>).current.src = getImage(true);
    };

    return (
      <Element
        as="figure"
        className={clsx(
          'image',
          {
            'is-fullwidth': fullWidth,
            [`is-${Number.isInteger(size) ? `${size}x${size}` : size}`]: size
          },
          className
        )}
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

Image.displayName = 'Image';
