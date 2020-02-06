import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type PanelBlockProps = ElementModifier & {
  active?: boolean;
} & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const PanelBlock = React.forwardRef<HTMLDivElement, PanelBlockProps>(({ className, active, ...props }, ref) => (
  <Element
    ref={ref}
    {...props}
    className={clsx('panel-block', className, {
      'is-active': active
    })}
  />
));

PanelBlock.defaultProps = {
  ...modifiers.defaultProps,
  active: false
};
