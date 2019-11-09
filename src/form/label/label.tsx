import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';

type LabelProps = ElementModifier & {
  size?: Sizes;
} & Omit<React.ComponentProps<'label'>, 'size' | 'unselectable'>;

export const Label: React.FunctionComponent<LabelProps> = ({ children, className, size, ...rest }: LabelProps) => {
  const props = modifiers.clean(rest);
  return (
    <label
      className={clsx('label', modifiers.getClassName(rest), className, {
        [`is-${size}`]: size
      })}
      {...props}
    >
      {children}
    </label>
  );
};

Label.defaultProps = {
  ...modifiers.defaultProps
};
