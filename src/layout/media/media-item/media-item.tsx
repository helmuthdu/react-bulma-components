import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type MediaItemProps = ElementModifier & {
  position?: 'center' | 'right' | 'left';
} & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const MediaItem: React.FunctionComponent<MediaItemProps> = ({
  children,
  className,
  position,
  ...props
}: MediaItemProps) => {
  const pos = position === 'center' ? 'content' : position;

  return (
    <Element
      {...props}
      className={clsx(className, {
        [`media-${pos}`]: pos
      })}
    >
      {children}
    </Element>
  );
};

MediaItem.defaultProps = {
  ...modifiers.defaultProps,
  position: 'center'
};
