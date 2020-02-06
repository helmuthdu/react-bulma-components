import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type MediaProps = ElementModifier & Omit<React.ComponentProps<'article'>, 'ref' | 'unselectable'>;

export const Media = React.forwardRef<HTMLDivElement, MediaProps>(({ children, className, ...props }, ref) => (
  <Element ref={ref} className={clsx('media', className)} {...props}>
    {children}
  </Element>
));

Media.defaultProps = {
  ...modifiers.defaultProps,
  as: 'article'
};
