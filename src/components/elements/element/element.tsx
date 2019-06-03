import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';

type ElementProps = Partial<Modifiers>;

export const Element: React.FunctionComponent<ElementProps> = ({ className, renderAs, ...allProps }: ElementProps) => {
  const RenderAs: any = renderAs;
  const props = modifiers.clean(allProps);
  return <RenderAs className={cn(className, modifiers.getClassName(allProps)) || undefined} {...props} />;
};

Element.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
