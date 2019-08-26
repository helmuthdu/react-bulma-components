import cn from 'classnames';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Tag } from './tag';

type TagsProps = ElementModifier & {
  gapless?: boolean;
  size?: 'medium' | 'large';
} & Omit<React.ComponentProps<'div'>, 'size' | 'unselectable'>;

export const Tags: React.FunctionComponent<TagsProps> & {
  Tag: typeof Tag;
} = ({ children, className, gapless, size, ...rest }: TagsProps) => {
  const props = modifiers.clean(rest);
  return (
    <div
      className={cn('tags', modifiers.getClassName(rest), className, {
        'has-addons': gapless,
        [`are-${size}`]: size
      })}
      {...props}
    >
      {children}
    </div>
  );
};

Tags.Tag = Tag;

Tags.defaultProps = {
  ...modifiers.defaultProps,
  gapless: false
};
