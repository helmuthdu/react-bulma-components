import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';
import { CardFooterItem } from './card-footer-item';

type CardFooterProps = ElementModifier;

export const CardFooter: React.FunctionComponent<CardFooterProps> & {
  Item: typeof CardFooterItem;
} = ({ className, ...props }: CardFooterProps) => <Element {...props} className={clsx('card-footer', className)} />;

CardFooter.Item = CardFooterItem;

CardFooter.defaultProps = {
  ...modifiers.defaultProps
};
