import cn from 'classnames';
import * as React from 'react';
import { Scale } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

export type ImageProps = ElementModifier & {
  alt?: string;
  fallbackSrc?: string;
  rounded?: boolean;
  size?: Scale;
  src?: string;
} & Omit<React.ComponentProps<'figure'>, 'unselectable'>;

export const Image: React.FunctionComponent<ImageProps> = ({
  className,
  alt,
  size,
  fallbackSrc,
  rounded,
  src,
  testId,
  ...props
}: ImageProps) => {
  const ref: React.RefObject<HTMLImageElement> = React.createRef();

  const getImage = (includeFallback: boolean = false) => {
    const placeholderImage = `https://dummyimage.com/${
      size
        ? Number.isInteger(size as any)
          ? `${size}x${size}`
          : `360x${(size as string).replace(/by/, ':')}`
        : '640x360'
    }/ccc/969696`;
    return (includeFallback ? fallbackSrc || placeholderImage : false) || (src || placeholderImage);
  };

  const handleError = () => {
    // @ts-ignore
    ref.current.src = getImage(true);
  };

  return (
    <Element
      as="figure"
      className={cn('image', className, {
        [`is-${Number.isInteger(size as any) ? `${size}x${size}` : size}`]: size
      })}
      {...props}
    >
      <img
        ref={ref}
        data-testid={testId}
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
  rounded: false
};
