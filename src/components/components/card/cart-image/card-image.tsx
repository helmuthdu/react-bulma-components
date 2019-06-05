import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element, Image, ImageProps } from '../../../elements';

type CardImageProps = Partial<Modifiers> & Partial<ImageProps>;

export const CardImage: React.FunctionComponent<CardImageProps> = ({ className, ...props }: CardImageProps) => (
  <Element className={cn('card-image', className)}>
    <Image {...props} />
  </Element>
);

CardImage.defaultProps = {
  ...modifiers.defaultProps,
  ...Image.defaultProps
};
