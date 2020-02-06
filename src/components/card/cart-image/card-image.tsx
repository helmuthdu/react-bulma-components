import clsx from 'clsx';
import * as React from 'react';
import { Scale } from '../../../constants';
import { Element, Image } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type CardImageProps = ElementModifier & {
  alt?: string;
  fallbackSrc?: string;
  fullWidth?: boolean;
  rounded?: boolean;
  size?: Scale;
  src?: string;
} & Omit<React.ComponentProps<'figure'>, 'ref' | 'size' | 'unselectable'>;

export const CardImage = React.forwardRef<HTMLDivElement, CardImageProps>(({ className, ...props }, ref) => (
  <Element className={clsx('card-image', className)}>
    <Image ref={ref as any} {...props} />
  </Element>
));

CardImage.defaultProps = {
  ...modifiers.defaultProps,
  ...Image.defaultProps
};
