import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type PanelTabsTabProps = ElementModifier & {
  active?: boolean;
} & Omit<React.ComponentProps<'a'>, 'unselectable'>;

export const PanelTab: React.FunctionComponent<PanelTabsTabProps> = ({
  className,
  active,
  ...props
}: PanelTabsTabProps) => (
  <Element
    className={cn(className, {
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
