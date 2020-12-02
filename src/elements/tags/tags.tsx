import clsx from 'clsx';
import * as React from 'react';
import { Sizes } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../element';

type TagsProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    gapless?: boolean;
    size?: Exclude<Sizes, 'small'>;
  };

export const Tags = React.forwardRef<HTMLDivElement, TagsProps>(
  ({ children, className, gapless, size, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        'tags',
        {
          'has-addons': gapless,
          [`are-${size}`]: size
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

Tags.defaultProps = {
  ...modifiers.defaultProps,
  gapless: false
};

Tags.displayName = 'Tags';
