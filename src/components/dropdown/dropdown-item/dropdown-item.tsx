import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type DropdownItemProps = ElementModifier & {
  as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  active?: boolean;
  onClick?: (...args: any[]) => void;
  value: any;
} & Omit<React.ComponentProps<'a'>, 'ref' | 'unselectable'>;

export const DropdownItem = React.forwardRef<HTMLAnchorElement, DropdownItemProps>(
  ({ active, as, children, value, ...props }, ref) => (
    <Element
      ref={ref}
      as={as}
      className={clsx('dropdown-item', {
        'is-active': active
      })}
      {...props}
    >
      {children}
    </Element>
  )
);

DropdownItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  as: 'a',
  onClick: () => {}
};
