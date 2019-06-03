import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';
import { CardContent, CardFooter, CardHeader, CardImage } from './components';

type CardProps = Partial<Modifiers>;

export const Card: React.FunctionComponent<CardProps> = ({ className, children, ...props }: CardProps) => (
  <Element className={cn('card', className)} {...props}>
    {children}
  </Element>
);

(Card as any).Content = CardContent;
(Card as any).Footer = CardFooter;
(Card as any).Header = CardHeader;
(Card as any).Image = CardImage;

Card.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
