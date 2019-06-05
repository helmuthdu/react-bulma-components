import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../elements';
import { CardFooter } from './card-footer';
import { CardHeader } from './card-header';
import { CardContent } from './cart-content';
import { CardImage } from './cart-image';

type CardProps = ElementModifier;

export const Card: React.FunctionComponent<CardProps> & {
  Content: typeof CardContent;
  Footer: typeof CardFooter;
  Header: typeof CardHeader;
  Image: typeof CardImage;
} = ({ className, children, ...props }: CardProps) => (
  <Element className={cn('card', className)} {...props}>
    {children}
  </Element>
);

Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Image = CardImage;

Card.defaultProps = {
  ...modifiers.defaultProps
};
