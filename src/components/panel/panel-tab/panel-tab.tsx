import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type PanelTabsTabProps = ElementModifier & {
  active?: boolean;
} & Omit<React.ComponentProps<'a'>, 'unselectable'>;

export const PanelTab: React.FunctionComponent<PanelTabsTabProps> = ({
  className,
  active,
  ...props
}: PanelTabsTabProps) => (
  <Element
    className={clsx(className, {
      'is-active': active
    })}
    {...props}
  />
);

PanelTab.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  as: 'a'
};
