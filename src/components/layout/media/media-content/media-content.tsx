import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../../modifiers';
import { Element } from '../../../elements';

type MediaContentProps = ElementModifier;

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
  ...modifiers.defaultProps
};
