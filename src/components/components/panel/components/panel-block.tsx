import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type PanelBlockProps = Partial<Modifiers> & {
  active?: boolean;
};

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
