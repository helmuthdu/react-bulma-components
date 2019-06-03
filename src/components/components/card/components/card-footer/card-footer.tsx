import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../modifiers';
import { Element } from '../../../../elements';
import { CardFooterItem } from './components';

type CardFooterProps = Partial<Modifiers>;
export const CardFooter: React.FunctionComponent<CardFooterProps> = ({ className, ...props }: CardFooterProps) => (
  <Element {...props} className={cn('card-footer', className)} />
);

(CardFooter as any).Item = CardFooterItem;

CardFooter.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
