import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type CardContentProps = ElementModifier;

export const CardContent: React.FunctionComponent<CardContentProps> = ({ className, ...props }: CardContentProps) => (
  <Element {...props} className={cn('card-content', className)} />
);

CardContent.defaultProps = {
  ...modifiers.defaultProps
};
