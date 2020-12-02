import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type LevelItemProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const LevelItem = React.forwardRef<HTMLDivElement, LevelItemProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} className={clsx('level-item', className)} {...props}>
    {children}
  </Element>
));

LevelItem.defaultProps = {
  ...modifiers.defaultProps
};

LevelItem.displayName = 'LevelItem';
