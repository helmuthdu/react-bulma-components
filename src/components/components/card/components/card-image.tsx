import cn from 'classnames';
import React from 'react';
import { Propportions } from '../../../../constants';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element, Image } from '../../../elements';

type CardImageProps = Partial<Modifiers> & {
  size?: Propportions;
  src?: string;
};

export const CardImage: React.FunctionComponent<CardImageProps> = ({ className, ...props }: any) => (
  <Element className={cn('card-image', className)}>
    <Image {...props} />
  </Element>
);

CardImage.defaultProps = {
  ...modifiers.defaultProps,
  ...Image.defaultProps
};
