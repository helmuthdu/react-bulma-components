import cn from 'classnames';
import * as React from 'react';
import { Scale } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../element';

const { useEffect, useState } = React;

export type ImageProps = Partial<Omit<React.ComponentProps<'figure'>, 'unselectable'>> &
  ElementModifier & {
    alt?: string;
    fallback?: string;
    rounded?: boolean;
    size?: Scale;
    src?: string;
  };

export const Image: React.FunctionComponent<ImageProps> = ({
  className,
  alt,
  size,
  fallback,
  rounded,
  src,
  ...props
}: ImageProps) => {
  const [image, setImage] = useState({ src, default: src });

  useEffect(() => {
    setImage({ src: image.default !== src ? src : image.src, default: src });
  }, [image.default, image.src, src]);

  const getImage = (includeFallback: boolean = false) => {
    const placeholderImage = `https://dummyimage.com/${
      Number.isInteger(size as any) ? `${size}x${size}` : `360x${(size as string).replace(/by/, ':')}`
    }/ccc/969696`;
    return (includeFallback ? fallback || placeholderImage : false) || (image.src || placeholderImage);
  };

  const handleError = () => {
    console.log();
    setImage({
      ...image,
      src: getImage(true)
    });
  };

  return (
    <Element
      {...props}
      renderAs="figure"
      className={cn('image', className, {
        [`is-${Number.isInteger(size as any) ? `${size}x${size}` : size}`]: size
      })}
    >
      <img
        data-testid="image-img"
        alt={alt}
        onError={handleError}
        src={getImage()}
        className={cn({ 'is-rounded': rounded })}
      />
    </Element>
  );
};

Image.defaultProps = {
  ...modifiers.defaultProps,
  rounded: false,
  size: 128
};
