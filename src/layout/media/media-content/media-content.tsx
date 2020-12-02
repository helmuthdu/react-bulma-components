import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type MediaContentProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> & ElementModifier;

export const MediaContent = React.forwardRef<HTMLDivElement, MediaContentProps>(
  ({ children, className, ...props }, ref) => (
    <Element ref={ref} className={clsx('content', className)} {...props}>
      {children}
    </Element>
  )
);

MediaContent.defaultProps = {
  ...modifiers.defaultProps
};

MediaContent.displayName = 'MediaContent';
