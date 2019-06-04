import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';
import { Element } from '../../../elements';

type MediaContentProps = Partial<Modifiers>;

export const MediaContent: React.FunctionComponent<MediaContentProps> = ({
  children,
  className,
  ...props
}: MediaContentProps) => (
  <Element {...props} className={cn(className, 'content')}>
    {children}
  </Element>
);

MediaContent.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
