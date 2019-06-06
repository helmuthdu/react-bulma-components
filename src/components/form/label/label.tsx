import cn from 'classnames';
import React from 'react';
import { Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';

type LabelProps = Partial<Omit<React.ComponentProps<'label'>, 'unselectable'>> &
  ElementModifier & {
    size?: Sizes;
  };

export const Label: React.FunctionComponent<LabelProps> = ({ children, className, size, ...rest }: LabelProps) => {
  const props = modifiers.clean(rest);
  return (
    <label
      {...props}
      className={cn('label', modifiers.getClassName(rest), className, {
        [`is-${size}`]: size
      })}
    >
      {children}
    </label>
  );
};

Label.defaultProps = {
  ...modifiers.defaultProps
};
