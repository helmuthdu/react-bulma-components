import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../../constants';
import modifiers, { ElementModifier } from '../../../modifiers';
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
  as,
  ...props
}: ButtonGroupProps) => (
  <Element
    {...props}
    as={as}
    className={clsx('buttons', className, {
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
