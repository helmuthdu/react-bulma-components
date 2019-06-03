import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../../../modifiers';
import { Element } from '../../../../../elements';

type CardHeaderIconProps = Partial<Modifiers>;

export const CardHeaderIcon: React.FunctionComponent<CardHeaderIconProps> = ({
  className,
  ...props
}: CardHeaderIconProps) => <Element {...props} className={cn('card-header-icon', className)} />;

CardHeaderIcon.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
