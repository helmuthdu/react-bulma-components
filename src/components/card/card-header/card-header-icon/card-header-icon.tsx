import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type CardHeaderIconProps = ElementModifier;

export const CardHeaderIcon: React.FunctionComponent<CardHeaderIconProps> = ({
  className,
  ...props
}: CardHeaderIconProps) => <Element {...props} className={clsx('card-header-icon', className)} />;

CardHeaderIcon.defaultProps = {
  ...modifiers.defaultProps
};
