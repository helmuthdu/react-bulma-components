import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type MediaItemProps = Partial<Modifiers> & {
  position?: 'center' | 'right' | 'left';
};

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
      className={cn(className, {
        [`media-${pos}`]: pos
      })}
    >
      {children}
    </Element>
  );
};

MediaItem.defaultProps = {
  ...modifiers.defaultProps,
  position: 'center',
  renderAs: 'div'
};
