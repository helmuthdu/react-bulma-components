import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type MediaItemProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    position?: 'center' | 'right' | 'left';
  };

export const MediaItem = React.forwardRef<HTMLDivElement, MediaItemProps>(
  ({ children, className, position, ...props }, ref) => {
    const pos = position === 'center' ? 'content' : position;

    return (
      <Element
        ref={ref}
        className={clsx(
          {
            [`media-${pos}`]: pos
          },
          className
        )}
        {...props}>
        {children}
      </Element>
    );
  }
);

MediaItem.defaultProps = {
  ...modifiers.defaultProps,
  position: 'center'
};

MediaItem.displayName = 'MediaItem';
