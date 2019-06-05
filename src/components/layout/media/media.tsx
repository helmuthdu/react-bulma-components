import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';

export * from './components';

type MediaProps = Partial<Modifiers>;

export const Media: React.FunctionComponent<MediaProps> = ({ children, className, ...props }: MediaProps) => (
  <Element {...props} className={cn('media', className)}>
    {children}
  </Element>
);

Media.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'article'
};
