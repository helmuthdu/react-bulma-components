import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../element';

type BoxProps = ElementModifier;

export const Box: React.FunctionComponent<BoxProps> = ({ children, className, ...props }: BoxProps) => (
  <Element {...props} className={cn('box', className)}>
    {children}
  </Element>
);

Box.defaultProps = {
  ...modifiers.defaultProps
};
