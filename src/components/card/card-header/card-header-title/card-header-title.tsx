import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../../elements';

type CardHeaderTitleProps = ElementModifier;

export const CardHeaderTitle: React.FunctionComponent<CardHeaderTitleProps> = ({
  className,
  ...props
}: CardHeaderTitleProps) => <Element {...props} className={cn('card-header-title', className)} />;

CardHeaderTitle.defaultProps = {
  ...modifiers.defaultProps
};
