import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type TabsProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    align?: 'centered' | 'right';
    fullwidth?: boolean;
    size?: Sizes;
    type?: 'toggle' | 'boxed' | 'toggle-rounded';
  };

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ children, className, align, size, type, fullwidth, ...props }, ref) => (
    <div
      className={clsx('tabs-container', {
        'is-fullwidth': fullwidth
      })}>
      <Element
        ref={ref}
        className={clsx(
          'tabs',
          {
            'is-fullwidth': fullwidth,
            'is-toggle': type === 'toggle-rounded',
            [`is-${align}`]: align,
            [`is-${size}`]: size,
            [`is-${type}`]: type
          },
          className
        )}
        {...props}>
        <ul>{children}</ul>
      </Element>
    </div>
  )
);

Tabs.defaultProps = {
  ...modifiers.defaultProps,
  as: 'nav',
  fullwidth: false
};

Tabs.displayName = 'Tabs';
