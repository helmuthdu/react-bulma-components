import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';
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
} = ({ className, children, ...rest }: CardProps) => {
  const props = modifiers.clean(rest);
  return (
    <Element className={clsx('card', className, modifiers.getClassName(rest))} {...props}>
      {children}
    </Element>
  );
};

Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Image = CardImage;

Card.defaultProps = {
  ...modifiers.defaultProps
};
