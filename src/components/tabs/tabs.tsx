import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';
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
    className={clsx('tabs-container', {
      'is-fullwidth': fullwidth
    })}
  >
    <Element
      {...props}
      className={clsx('tabs', className, {
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
