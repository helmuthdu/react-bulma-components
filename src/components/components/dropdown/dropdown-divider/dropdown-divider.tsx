import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';

type DropdownDividerProps = Partial<Omit<React.ComponentProps<'hr'>, 'unselectable'>> & ElementModifier;

export const DropdownDivider: React.FunctionComponent<DropdownDividerProps> = ({
  className,
  ...rest
}: DropdownDividerProps) => {
  const props = modifiers.clean(rest);
  return <hr {...props} className={cn('dropdown-divider', modifiers.getClassName(rest), className)} />;
};

DropdownDivider.defaultProps = {
  ...modifiers.defaultProps
};
