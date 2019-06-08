import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';

type ElementProps = ElementModifier;

export const Element: React.FunctionComponent<ElementProps> = ({ className, as: Component, ...rest }: ElementProps) => (
  // @ts-ignore
  <Component className={cn(className, modifiers.getClassName(rest)) || undefined} {...modifiers.clean(rest)} />
);

Element.defaultProps = {
  ...modifiers.defaultProps,
  as: 'div'
};
