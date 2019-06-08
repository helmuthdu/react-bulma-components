import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type DropdownItemProps = ElementModifier & {
  active?: boolean;
  onClick?: (...args: any[]) => void;
  value: any;
} & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const DropdownItem: React.FunctionComponent<DropdownItemProps> = ({
  active,
  children,
  value,
  testId,
  title,
  ...props
}: DropdownItemProps) => (
  // @ts-ignore
  <Element
    data-testid={testId}
    title={title}
    className={cn('dropdown-item', {
      'is-active': active
    })}
    {...props}
  >
    {children}
  </Element>
);

DropdownItem.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  onClick: () => {}
};
