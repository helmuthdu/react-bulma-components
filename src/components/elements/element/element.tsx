import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';

type ElementProps = ElementModifier & {
  max?: string | number;
  min?: string | number;
  value?: string | number | string[];
  title?: string;
};

export const Element: React.FunctionComponent<ElementProps> = ({
  className,
  renderAs,
  ...allProps
}: ElementModifier) => {
  const RenderAs: any = renderAs;
  const props = modifiers.clean(allProps);
  return <RenderAs className={cn(className, modifiers.getClassName(allProps)) || undefined} {...props} />;
};

Element.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
