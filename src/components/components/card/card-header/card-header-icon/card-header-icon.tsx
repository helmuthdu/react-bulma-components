import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../../../modifiers';
import { Element } from '../../../../elements';

type CardHeaderIconProps = ElementModifier;

export const CardHeaderIcon: React.FunctionComponent<CardHeaderIconProps> = ({
  className,
  ...props
}: CardHeaderIconProps) => <Element {...props} className={cn('card-header-icon', className)} />;

CardHeaderIcon.defaultProps = {
  ...modifiers.defaultProps
};
