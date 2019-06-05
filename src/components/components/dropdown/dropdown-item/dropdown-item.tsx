import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../elements';

type DropdownItemProps = Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> &
  ElementModifier & {
    active?: boolean;
    onClick?: (...args: any[]) => void;
    value: any;
  };

export const DropdownItem: React.FunctionComponent<DropdownItemProps> = ({
  active,
  children,
  value,
  ...props
}: DropdownItemProps) => (
  <Element
    title={value}
    {...props}
    className={cn('dropdown-item', {
      'is-active': active
    })}
  >
    {children}
  </Element>
);

DropdownItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  onClick: () => {}
};
