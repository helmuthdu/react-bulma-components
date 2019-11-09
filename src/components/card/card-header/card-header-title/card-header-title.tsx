import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type CardHeaderTitleProps = ElementModifier;

export const CardHeaderTitle: React.FunctionComponent<CardHeaderTitleProps> = ({
  className,
  ...props
}: CardHeaderTitleProps) => <Element {...props} className={clsx('card-header-title', className)} />;

CardHeaderTitle.defaultProps = {
  ...modifiers.defaultProps
};
