import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../modifiers';
import { Element } from '../../../../elements';

type CardFooterItemProps = Partial<Modifiers>;

export const CardFooterItem: React.FunctionComponent<CardFooterItemProps> = ({
  className,
  ...props
}: CardFooterItemProps) => <Element {...props} className={cn('card-footer-item', className)} />;

CardFooterItem.defaultProps = {
  ...modifiers.defaultProps
};
