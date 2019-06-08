import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type PanelTabsTabProps = ElementModifier & {
  active?: boolean;
};

export const PanelTab: React.FunctionComponent<PanelTabsTabProps> = ({
  className,
  active,
  ...props
}: PanelTabsTabProps) => (
  <Element
    {...props}
    className={cn(className, {
      'is-active': active
    })}
  />
);

PanelTab.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  renderAs: 'a'
};
