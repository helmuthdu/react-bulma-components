import clsx from 'clsx';
import * as React from 'react';
import { Element, Image, ImageProps } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type CardImageProps = ElementModifier & ImageProps;

export const CardImage: React.FunctionComponent<CardImageProps> = ({ className, ...props }: CardImageProps) => (
  <Element className={clsx('card-image', className)}>
    <Image {...props} />
  </Element>
);

CardImage.defaultProps = {
  ...modifiers.defaultProps,
  ...Image.defaultProps
};
