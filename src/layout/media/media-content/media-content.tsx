import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../../elements';

type MediaContentProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const MediaContent: React.FunctionComponent<MediaContentProps> = ({
  children,
  className,
  ...props
}: MediaContentProps) => (
  <Element className={cn('content', className)} {...props}>
    {children}
  </Element>
);

MediaContent.defaultProps = {
  ...modifiers.defaultProps
};
