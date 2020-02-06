import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type LevelItemProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const LevelItem = React.forwardRef<HTMLDivElement, LevelItemProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} className={clsx('level-item', className)} {...props}>
    {children}
  </Element>
));

LevelItem.defaultProps = {
  ...modifiers.defaultProps
};
