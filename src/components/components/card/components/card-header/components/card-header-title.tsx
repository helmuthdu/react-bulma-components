import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../../modifiers';
import { Element } from '../../../../../elements';

type CardHeaderTitleProps = Partial<Modifiers>;

export const CardHeaderTitle: React.FunctionComponent<CardHeaderTitleProps> = ({
  className,
  ...props
}: CardHeaderTitleProps) => <Element {...props} className={cn('card-header-title', className)} />;

CardHeaderTitle.defaultProps = {
  ...modifiers.defaultProps
};
