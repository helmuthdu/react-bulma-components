import cn from 'classnames';
import React from 'react';
import modifiers from '../../../../modifiers';
import { HelpersModifier } from '../../../../modifiers/helpers';
import { Element } from '../../../elements';

type MediaContentProps = Partial<Modifiers> & {
  className?: string;
  style?: object;
  renderAs?: string | ((...args: any[]) => any);
};
export const MediaContent: React.FunctionComponent<MediaContentProps> = ({ children, className, ...props }: any) => (
  <Element {...props} className={cn(className, 'content')}>
    {children}
  </Element>
);
MediaContent.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
