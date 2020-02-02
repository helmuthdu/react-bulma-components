import clsx from 'clsx';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type TextProps = ElementModifier;

export const Text: React.FunctionComponent<TextProps> = ({ children, className, ...props }: TextProps) => (
  <Element {...props} className={clsx(className)}>
    {children}
  </Element>
);

Text.defaultProps = {
  ...modifiers.defaultProps,
  as: 'p'
};
