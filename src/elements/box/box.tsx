import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type BoxProps = ElementModifier;

export const Box: React.FunctionComponent<BoxProps> = ({ children, paddingless, className, ...rest }: BoxProps) => {
  const props = modifiers.clean(rest);
  return (
    <Element
      {...props}
      className={cn('box', className, modifiers.getClassName(rest), {
        'is-paddingless': paddingless
      })}
    >
      {children}
    </Element>
  );
};

Box.defaultProps = {
  ...modifiers.defaultProps
};
