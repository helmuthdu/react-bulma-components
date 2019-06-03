import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../../modifiers';

type TagsProps = Partial<Modifiers> & {
  gapless?: boolean;
  size?: 'medium' | 'large';
};

export const Tags: React.FunctionComponent<TagsProps> = ({
  children,
  className,
  gapless,
  size,
  ...allProps
}: TagsProps) => {
  const props = modifiers.clean(allProps);
  return (
    <span
      {...props}
      className={cn('tags', modifiers.getClassName(allProps), className, {
        'has-addons': gapless,
        [`are-${size}`]: size
      })}
    >
      {children}
    </span>
  );
};

Tags.defaultProps = {
  ...modifiers.defaultProps,
  gapless: false
};
