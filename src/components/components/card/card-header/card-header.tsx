import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type CardHeaderProps = Partial<Modifiers>;

export const CardHeader: React.FunctionComponent<CardHeaderProps> = ({ className, ...props }: CardHeaderProps) => (
  <Element {...props} className={cn('card-header', className)} />
);

CardHeader.defaultProps = {
  ...modifiers.defaultProps
};
