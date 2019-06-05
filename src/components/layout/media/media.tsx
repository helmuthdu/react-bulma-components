import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Element } from '../../elements';

type MediaProps = ElementModifier;

export const Media: React.FunctionComponent<MediaProps> = ({ children, className, ...props }: MediaProps) => (
  <Element {...props} className={cn('media', className)}>
    {children}
  </Element>
);

Media.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'article'
};
