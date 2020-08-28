import clsx from 'clsx';
import * as React from 'react';
import { Breakpoints, Gap } from '../constants';
import { Element } from '../elements';
import modifiers, { ElementModifier } from '../modifiers';

type ColumnsProps = ElementModifier & {
  breakpoint?: Breakpoints;
  centered?: boolean;
  gapless?: boolean;
  gap?: Gap;
  multiline?: boolean;
  vcentered?: boolean;
} & Omit<React.ComponentProps<'div'>, 'ref' | 'unselectable'>;

export const Columns = React.forwardRef<HTMLDivElement, ColumnsProps>(
  ({ breakpoint, centered, className, gap, gapless, multiline, vcentered, ...props }, ref) => (
    <Element
      ref={ref}
      className={clsx('columns', className, modifiers.getClassName(props), {
        'is-centered': centered,
        'is-gapless': gapless,
        'is-multiline': multiline,
        'is-variable': gap !== undefined,
        'is-vcentered': vcentered,
        [`is-${breakpoint}`]: breakpoint,
        [`is-${gap}`]: gap !== undefined
      })}
      {...modifiers.clean(props)}
    />
  )
);

Columns.defaultProps = {
  ...modifiers.defaultProps,
  centered: false,
  gapless: false,
  multiline: true
};
