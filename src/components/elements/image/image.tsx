import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../element';

type ImageProps = Partial<Modifiers> & {
  alt?: string;
  fallback?: string;
  rounded?: boolean;
  size?: any;
  src: string;
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
  });

  const handleError = () => {
    setImage({ ...image, src: fallback as string });
  };

  if (typeof size === 'number') {
    size = `${size}x${size}`;
  }

  return (
    <Element
      {...props}
      renderAs="figure"
      className={cn('image', className, {
        [`is-${size}`]: size
      })}
    >
      <img
        data-testid="image-img"
        alt={alt}
        onError={handleError}
        src={image.src}
        className={cn({ 'is-rounded': rounded })}
      />
    </Element>
  );
};

Image.defaultProps = {
  ...modifiers.defaultProps,
  rounded: false,
  fallback: 'http//bulma.io/images/placeholders/480x480.png'
};
