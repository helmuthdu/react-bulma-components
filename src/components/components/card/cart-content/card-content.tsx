import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type CardContentProps = Partial<Modifiers>;

export const CardContent: React.FunctionComponent<CardContentProps> = ({ className, ...props }: CardContentProps) => (
  <Element {...props} className={cn('card-content', className)} />
);

CardContent.defaultProps = {
  ...modifiers.defaultProps
};
