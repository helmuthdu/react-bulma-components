import cn from 'classnames';
import * React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';
import { CardFooterItem } from './card-footer-item';

type CardFooterProps = ElementModifier;

export const CardFooter: React.FunctionComponent<CardFooterProps> & {
  Item: typeof CardFooterItem;
} = ({ className, ...props }: CardFooterProps) => <Element {...props} className={cn('card-footer', className)} />;

CardFooter.Item = CardFooterItem;

CardFooter.defaultProps = {
  ...modifiers.defaultProps
};
