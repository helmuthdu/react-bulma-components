import clsx from 'clsx';
import * as React from 'react';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type TagsProps = ElementModifier & {
  gapless?: boolean;
  size?: 'medium' | 'large';
} & Omit<React.ComponentProps<'div'>, 'ref' | 'size' | 'unselectable'>;

export const Tags = React.forwardRef<HTMLDivElement, TagsProps>(
  ({ children, className, gapless, size, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx('tags', modifiers.getClassName(props), className, {
        'has-addons': gapless,
        [`are-${size}`]: size
      })}
      {...modifiers.clean(props)}>
      {children}
    </Element>
  )
);

Tags.defaultProps = {
  ...modifiers.defaultProps,
  gapless: false
};
