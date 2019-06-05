import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

export * from './components';

type CardProps = Partial<Modifiers>;

export const Card: React.FunctionComponent<CardProps> = ({ className, children, ...props }: CardProps) => (
  <Element className={cn('card', className)} {...props}>
    {children}
  </Element>
);

Card.defaultProps = {
  ...modifiers.defaultProps
};
