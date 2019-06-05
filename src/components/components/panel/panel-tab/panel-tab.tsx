import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type PanelTabsTabProps = Partial<Modifiers> & {
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
