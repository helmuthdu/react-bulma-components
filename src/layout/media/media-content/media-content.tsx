import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../../elements';
import modifiers, { ElementModifier } from '../../../modifiers';

type MediaContentProps = ElementModifier & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const MediaContent: React.FunctionComponent<MediaContentProps> = ({
  children,
  className,
  ...props
}: MediaContentProps) => (
  <Element className={clsx('content', className)} {...props}>
    {children}
  </Element>
);

MediaContent.defaultProps = {
  ...modifiers.defaultProps
};
