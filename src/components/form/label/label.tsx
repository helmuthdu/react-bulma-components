import cn from 'classnames';
import React from 'react';
import { Sizes } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';

type LabelProps = Partial<Modifiers> & {
  size?: Sizes;
};

export const Label: React.FunctionComponent<LabelProps> = ({ children, className, size, ...allProps }: LabelProps) => {
  const props = modifiers.clean(allProps);
  return (
    <label
      {...props}
      className={cn('label', modifiers.getClassName(allProps), className, {
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
