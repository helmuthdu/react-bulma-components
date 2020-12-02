import clsx from 'clsx';
import * as React from 'react';
import { Element, Image, ImageProps } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type CardImageProps = Omit<React.ComponentPropsWithRef<'figure'>, 'unselectable'> & ElementModifier & ImageProps;

export const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(({ className, ...props }, ref) => (
  <Element className={clsx('card-image', className)}>
    <Image ref={ref as any} {...props} />
  </Element>
));

CardImage.defaultProps = {
  ...modifiers.defaultProps,
  ...Image.defaultProps
};

CardImage.displayName = 'CardImage';
