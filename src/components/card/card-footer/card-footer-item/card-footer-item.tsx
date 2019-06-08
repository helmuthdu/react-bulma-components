import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../../elements';

type CardFooterItemProps = ElementModifier;

export const CardFooterItem: React.FunctionComponent<CardFooterItemProps> = ({
  className,
  ...props
}: CardFooterItemProps) => <Element {...props} className={cn('card-footer-item', className)} />;

CardFooterItem.defaultProps = {
  ...modifiers.defaultProps
};
