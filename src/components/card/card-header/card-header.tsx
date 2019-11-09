import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';
import { CardHeaderIcon } from './card-header-icon';
import { CardHeaderTitle } from './card-header-title';

type CardHeaderProps = ElementModifier;

export const CardHeader: React.FunctionComponent<CardHeaderProps> & {
  Icon: typeof CardHeaderIcon;
  Title: typeof CardHeaderTitle;
} = ({ className, ...props }: CardHeaderProps) => <Element {...props} className={clsx('card-header', className)} />;

CardHeader.Icon = CardHeaderIcon;
CardHeader.Title = CardHeaderTitle;

CardHeader.defaultProps = {
  ...modifiers.defaultProps
};
