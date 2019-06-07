import cn from 'classnames';
import React from 'react';
import { Sizes } from '../../../../constants';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../element';

type ButtonGroupProps = ElementModifier & {
  hasAddons?: boolean;
  position?: 'centered' | 'right';
  size?: Sizes;
};

export const ButtonGroup: React.FunctionComponent<ButtonGroupProps> = ({
  children,
  className,
  hasAddons,
  position,
  size,
  renderAs,
  ...props
}: ButtonGroupProps) => (
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
  hasAddons: false
};
