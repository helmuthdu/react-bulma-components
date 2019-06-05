import cn from 'classnames';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { Proportions } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../element';

export type ImageProps = Partial<Modifiers> & {
  alt?: string;
  fallback?: string;
  rounded?: boolean;
  size?: Proportions;
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

  const handleError = () => {
    setImage({ ...image, src: fallback as string });
  };

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
