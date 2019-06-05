import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../element';

type BoxProps = Partial<Modifiers>;

export const Box: React.FunctionComponent<BoxProps> = ({ children, className, ...props }: BoxProps) => (
  <Element {...props} className={cn('box', className)}>
    {children}
  </Element>
);

Box.defaultProps = {
  ...modifiers.defaultProps
};
