import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../modifiers';
import { Element } from '../../../../elements';
import { CardHeaderIcon, CardHeaderTitle } from './components';

type CardHeaderProps = Partial<Modifiers>;

export const CardHeader: React.FunctionComponent<CardHeaderProps> = ({ className, ...props }: any) => (
  <Element {...props} className={cn('card-header', className)} />
);

(CardHeader as any).Title = CardHeaderTitle;
(CardHeader as any).Icon = CardHeaderIcon;

CardHeader.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
