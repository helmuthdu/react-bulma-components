import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type MediaItemProps = ElementModifier & {
  position?: 'center' | 'right' | 'left';
} & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const MediaItem = React.forwardRef<HTMLDivElement, MediaItemProps>(
  ({ children, className, position, ...props }, ref) => {
    const pos = position === 'center' ? 'content' : position;

    return (
      <Element
        ref={ref}
        className={clsx(className, {
          [`media-${pos}`]: pos
        })}
        {...props}
      >
        {children}
      </Element>
    );
  }
);

MediaItem.defaultProps = {
  ...modifiers.defaultProps,
  position: 'center'
};
