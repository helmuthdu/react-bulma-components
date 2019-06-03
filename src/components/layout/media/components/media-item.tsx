import cn from 'classnames';
import React from 'react';
import modifiers from '../../../../modifiers';
import { HelpersModifier } from '../../../../modifiers/helpers';
import { Element } from '../../../elements';

type MediaItemProps = Partial<Modifiers> & {
  className?: string;
  position?: 'center' | 'right' | 'left';
  renderAs?: string | ((...args: any[]) => any);
  style?: object;
};
export const MediaItem: React.FunctionComponent<MediaItemProps> = ({
  children,
  className,
  position,
  ...props
}: any) => {
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
