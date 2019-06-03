import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type DropdownItemProps = Partial<Modifiers> & {
  active?: boolean;
  onClick?: (...args: any[]) => any;
  value: any;
};

export const DropdownItem: React.FunctionComponent<DropdownItemProps> = ({
  active,
  children,
  value,
  ...props
}: DropdownItemProps) => (
  // @ts-ignore
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
