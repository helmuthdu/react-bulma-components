import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../../elements';
import { MediaContent } from './media-content';
import { MediaItem } from './media-item';

type MediaProps = ElementModifier & Omit<React.ComponentProps<'article'>, 'unselectable'>;

export const Media: React.FunctionComponent<MediaProps> & {
  Content: typeof MediaContent;
  Item: typeof MediaItem;
} = ({ children, className, ...props }: MediaProps) => (
  <Element className={cn('media', className)} {...props}>
    {children}
  </Element>
);

Media.Content = MediaContent;
Media.Item = MediaItem;

Media.defaultProps = {
  ...modifiers.defaultProps,
  as: 'article'
};
