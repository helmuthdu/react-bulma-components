import clsx from 'clsx';
import * as React from 'react';
import { Breakpoints, Gap } from '../constants';
import { Element } from '../elements';
import modifiers, { ElementModifier } from '../modifiers';

type ColumnsProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    breakpoint?: Breakpoints;
    centered?: boolean;
    gapless?: boolean;
    gap?: Gap;
    multiline?: boolean;
    vcentered?: boolean;
  };

export const Columns = React.forwardRef<HTMLDivElement, ColumnsProps>(
  ({ children, breakpoint, centered, className, gap, gapless, multiline, vcentered, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx(
        'columns',
        {
          'is-centered': centered,
          'is-gapless': gapless,
          'is-multiline': multiline,
          'is-variable': gap !== undefined,
          'is-vcentered': vcentered,
          [`is-${breakpoint}`]: breakpoint,
          [`is-${gap}`]: gap !== undefined
        },
        className
      )}
      {...props}>
      {children}
    </Element>
  )
);

Columns.defaultProps = {
  ...modifiers.defaultProps,
  centered: false,
  gapless: false,
  multiline: false
};

Columns.displayName = 'Columns';
