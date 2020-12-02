import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type PanelTabsTabProps = Omit<React.ComponentPropsWithRef<'a'>, 'unselectable'> &
  ElementModifier & {
    active?: boolean;
  };

export const PanelTab = React.forwardRef<HTMLAnchorElement, PanelTabsTabProps>(
  ({ active, className, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        {
          'is-active': active
        },
        className
      )}
      {...props}
    />
  )
);

PanelTab.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  as: 'a'
};

PanelTab.displayName = 'PanelTab';
