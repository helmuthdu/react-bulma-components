import clsx from 'clsx';
import * as React from 'react';
import { JSXElementConstructor } from 'react';
import modifiers, { ElementModifier } from '../../modifiers';

type ElementProps = ElementModifier & React.ComponentProps<JSXElementConstructor<any>>;

export const Element: React.FunctionComponent<ElementProps> = ({ className, as: Component, ...rest }: ElementProps) => (
  <Component className={clsx(className, modifiers.getClassName(rest)) || undefined} {...modifiers.clean(rest)} />
);

Element.defaultProps = {
  ...modifiers.defaultProps,
  as: 'div'
};
