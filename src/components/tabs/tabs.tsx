import cn from 'classnames';
import * as React from 'react';
import { Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';
import { Tab } from './tab';

type TabsProps = ElementModifier & {
  align?: null | 'centered' | 'right';
  fullwidth?: boolean;
  size?: Sizes;
  type?: 'toggle' | 'boxed' | 'toggle-rounded';
};

export const Tabs: React.FunctionComponent<TabsProps> & {
  Tab: typeof Tab;
} = ({ children, className, align, size, type, fullwidth, ...props }: TabsProps) => (
  <div
    className={cn('tabs-container', {
      'is-fullwidth': fullwidth
    })}
  >
    <Element
      {...props}
      className={cn('tabs', className, {
        'is-fullwidth': fullwidth,
        'is-toggle': type === 'toggle-rounded',
        [`is-${align}`]: align,
        [`is-${size}`]: size,
        [`is-${type}`]: type
      })}
    >
      <ul>{children}</ul>
    </Element>
  </div>
);

Tabs.Tab = Tab;

Tabs.defaultProps = {
  ...modifiers.defaultProps,
  as: 'nav',
  fullwidth: false
};
