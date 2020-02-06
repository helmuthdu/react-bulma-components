import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type PanelTabsTabProps = ElementModifier & {
  active?: boolean;
} & Omit<React.ComponentProps<'a'>, 'ref' | 'unselectable'>;

export const PanelTab = React.forwardRef<HTMLAnchorElement, PanelTabsTabProps>(
  ({ className, active, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(className, {
        'is-active': active
      })}
      {...props}
    />
  )
);

PanelTab.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  as: 'a'
};
