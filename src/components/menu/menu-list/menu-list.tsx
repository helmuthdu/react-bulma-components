import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

const { Fragment } = React;

type MenuListProps = ElementModifier & {
  title?: string;
} & Omit<React.ComponentProps<'ul'>, 'ref' | 'unselectable'>;

export const MenuList = React.forwardRef<HTMLUListElement, MenuListProps>(({ className, title, ...props }, ref) => (
  <Fragment>
    {title && <p className="menu-label">{title}</p>}
    <Element ref={ref} as="ul" className={clsx('menu-list', className)} {...props} />
  </Fragment>
));

MenuList.defaultProps = {
  ...modifiers.defaultProps
};
