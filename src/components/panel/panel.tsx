import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type PanelProps = ElementModifier;

export const Panel = React.forwardRef<HTMLDivElement, PanelProps>(({ className, ...props }, ref) => (
  <Element ref={ref} {...props} className={clsx('panel', className)} />
));

Panel.defaultProps = {
  ...modifiers.defaultProps,
  as: 'nav'
};
