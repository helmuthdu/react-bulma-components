import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type PanelBlockProps = ElementModifier & {
  active?: boolean;
} & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const PanelBlock: React.FunctionComponent<PanelBlockProps> = ({
  className,
  active,
  ...props
}: PanelBlockProps) => (
  <Element
    {...props}
    className={cn('panel-block', className, {
      'is-active': active
    })}
  />
);

PanelBlock.defaultProps = {
  ...modifiers.defaultProps,
  active: false
};
