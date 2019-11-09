import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type CardContentProps = ElementModifier;

export const CardContent: React.FunctionComponent<CardContentProps> = ({ className, ...props }: CardContentProps) => (
  <Element {...props} className={clsx('card-content', className)} />
);

CardContent.defaultProps = {
  ...modifiers.defaultProps
};
