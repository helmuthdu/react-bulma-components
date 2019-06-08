import cn from 'classnames';
import * React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';
import { CardHeaderIcon } from './card-header-icon';
import { CardHeaderTitle } from './card-header-title';

type CardHeaderProps = ElementModifier;

export const CardHeader: React.FunctionComponent<CardHeaderProps> & {
  Icon: typeof CardHeaderIcon;
  Title: typeof CardHeaderTitle;
} = ({ className, ...props }: CardHeaderProps) => <Element {...props} className={cn('card-header', className)} />;

CardHeader.Icon = CardHeaderIcon;
CardHeader.Title = CardHeaderTitle;

CardHeader.defaultProps = {
  ...modifiers.defaultProps
};
