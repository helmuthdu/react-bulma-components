import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type CardFooterItemProps = ElementModifier;

export const CardFooterItem: React.FunctionComponent<CardFooterItemProps> = ({
  className,
  ...props
}: CardFooterItemProps) => <Element {...props} className={clsx('card-footer-item', className)} />;

CardFooterItem.defaultProps = {
  ...modifiers.defaultProps
};
