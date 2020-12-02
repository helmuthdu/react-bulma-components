import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

const { Fragment } = React;

type MenuListProps = Omit<React.ComponentPropsWithRef<'ul'>, 'unselectable'> &
  ElementModifier & {
    title?: string;
  };

export const MenuList = React.forwardRef<HTMLUListElement, MenuListProps>(({ className, title, ...props }, ref) => (
  <Fragment>
    {title && <p className="menu-label">{title}</p>}
    <Element ref={ref} as="ul" className={clsx('menu-list', className)} {...props} />
  </Fragment>
));

MenuList.defaultProps = {
  ...modifiers.defaultProps
};

MenuList.displayName = 'MenuList';
