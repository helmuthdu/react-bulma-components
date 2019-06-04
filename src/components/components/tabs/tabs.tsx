import cn from 'classnames';
import React from 'react';
import { Sizes } from '../../../constants';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';
import { Tab } from './components/tab';

type TabsProps = Partial<Modifiers> & {
  align?: null | 'centered' | 'right';
  fullwidth?: boolean;
  size?: Sizes;
  type?: 'toggle' | 'boxed' | 'toggle-rounded';
};

export const Tabs: React.FunctionComponent<TabsProps> = ({
  children,
  className,
  align,
  size,
  type,
  fullwidth,
  ...props
}: TabsProps) => (
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
);

(Tabs as any).Tab = Tab;

Tabs.defaultProps = {
  ...modifiers.defaultProps,
  fullwidth: false,
  renderAs: 'div'
};
