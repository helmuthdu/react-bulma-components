import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type TabProps = ElementModifier & {
  active?: boolean;
};

export const Tab: React.FunctionComponent<TabProps> = ({ children, className, style, active, ...props }: TabProps) => (
  <li
    style={style}
    className={cn(className, {
      'is-active': active
    })}
  >
    <Element {...props}>{children}</Element>
  </li>
);

Tab.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  renderAs: 'a'
};
