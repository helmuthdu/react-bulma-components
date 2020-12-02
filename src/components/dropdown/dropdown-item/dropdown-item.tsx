import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type DropdownItemProps = Omit<React.ComponentPropsWithRef<'a'>, 'unselectable'> &
  ElementModifier & {
    active?: boolean;
    value: any;
  };

export const DropdownItem = React.forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ active, children, className, value, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        'dropdown-item',
        {
          'is-active': active
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

DropdownItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  as: 'a'
};

DropdownItem.displayName = 'DropdownItem';
