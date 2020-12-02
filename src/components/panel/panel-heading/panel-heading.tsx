import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type PanelHeaderProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const PanelHeading = React.forwardRef<HTMLDivElement, PanelHeaderProps>(({ className, ...props }, ref) => (
  <Element ref={ref} className={clsx('panel-heading', className)} {...props} />
));

PanelHeading.defaultProps = {
  ...modifiers.defaultProps
};

PanelHeading.displayName = 'PanelHeading';
