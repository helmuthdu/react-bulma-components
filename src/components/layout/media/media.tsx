import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';
import { MediaContent, MediaItem } from './components';

type MediaProps = Partial<Modifiers>;

export const Media: React.FunctionComponent<MediaProps> = ({ children, className, ...props }: MediaProps) => (
  <Element {...props} className={cn('media', className)}>
    {children}
  </Element>
);

(Media as any).Item = MediaItem;
(Media as any).Content = MediaContent;

Media.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'article'
};
