import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';

type ElementProps = ElementModifier;

export const Element: React.FunctionComponent<ElementProps> = ({ className, renderAs, ...rest }: ElementProps) => {
  const RenderAs: any = renderAs;
  const props = modifiers.clean(rest);
  return <RenderAs className={cn(className, modifiers.getClassName(rest)) || undefined} {...props} />;
};

Element.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
