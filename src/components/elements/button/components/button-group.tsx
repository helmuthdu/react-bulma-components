import cn from 'classnames';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../element';

type ButtonGroupProps = {
  className?: string;
  hasAddons?: boolean;
  position?: 'centered' | 'right';
  size?: any;
  renderAs?: string | ((...args: any[]) => any);
};
export const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = ({
  children,
  className,
  hasAddons,
  position,
  size,
  renderAs,
  ...props
}: any) => (
  <Element
    {...props}
    renderAs={renderAs}
    className={cn('buttons', className, {
      'has-addons': hasAddons,
      [`are-${size}`]: size,
      [`is-${position}`]: position
    })}
  >
    {children}
  </Element>
);
ButtonGroup.defaultProps = {
  ...modifiers.defaultProps,
  hasAddons: false,
  renderAs: 'div'
};
