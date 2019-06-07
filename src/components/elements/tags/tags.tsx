import cn from 'classnames';
import React from 'react';
import modifiers, { ElementModifier } from '../../../modifiers';
import { Tag } from './tag';

type TagsProps = Partial<Omit<React.ComponentProps<'span'>, 'unselectable'>> &
  ElementModifier & {
    gapless?: boolean;
    size?: 'medium' | 'large';
  };

export const Tags: React.FunctionComponent<TagsProps> & {
  Tag: typeof Tag;
} = ({ children, className, gapless, size, ...rest }: TagsProps) => {
  const props = modifiers.clean(rest);
  return (
    <span
      {...props}
      className={cn('tag-group', modifiers.getClassName(rest), className, {
        'has-addons': gapless,
        [`are-${size}`]: size
      })}
    >
      {children}
    </span>
  );
};

Tags.Tag = Tag;

Tags.defaultProps = {
  ...modifiers.defaultProps,
  gapless: false
};
