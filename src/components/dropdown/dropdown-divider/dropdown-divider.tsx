import clsx from 'clsx';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';

type DropdownDividerProps = Omit<React.ComponentPropsWithRef<'hr'>, 'unselectable'> & ElementModifier;

export const DropdownDivider = React.forwardRef<HTMLHRElement, DropdownDividerProps>(({ className, ...props }, ref) => {
  return (
    <hr
      ref={ref}
      className={clsx('dropdown-divider', modifiers.getClassName(props), className)}
      {...modifiers.clean(props)}
    />
  );
});

DropdownDivider.defaultProps = {
  ...modifiers.defaultProps
};

DropdownDivider.displayName = 'DropdownDivider';
