import cn from 'classnames';
import * React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';

type DropdownDividerProps = ElementModifier & Omit<React.ComponentProps<'hr'>, 'unselectable'>;

export const DropdownDivider: React.FunctionComponent<DropdownDividerProps> = ({
  className,
  ...rest
}: DropdownDividerProps) => {
  const props = modifiers.clean(rest);
  return <hr className={cn('dropdown-divider', modifiers.getClassName(rest), className)} {...props} />;
};

DropdownDivider.defaultProps = {
  ...modifiers.defaultProps
};
