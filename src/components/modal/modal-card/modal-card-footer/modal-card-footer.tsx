import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../../elements';
import modifiers, { ElementModifier } from '../../../../modifiers';

type ModalCardFootProps = ElementModifier & Omit<React.ComponentProps<'footer'>, 'ref' | 'unselectable'>;

export const ModalCardFooter = React.forwardRef<HTMLDivElement, ModalCardFootProps>(
  ({ children, className, ...props }, ref) => (
    <Element ref={ref} className={clsx('modal-card-foot', className)} {...props}>
      {children}
    </Element>
  )
);

ModalCardFooter.defaultProps = {
  ...modifiers.defaultProps,
  as: 'footer'
};
