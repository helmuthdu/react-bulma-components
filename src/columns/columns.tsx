import cn from 'classnames';
import * React from 'react';
import { Breakpoints } from '../constants';
import modifiers, { ElementModifier } from '../modifiers';
import { Element } from '../elements';
import { Column } from './column';

type ColumnsProps = ElementModifier & {
  breakpoint?: Breakpoints;
  centered?: boolean;
  gapless?: boolean;
  multiline?: boolean;
  vcentered?: boolean;
} & Omit<React.ComponentProps<'div'>, 'unselectable'>;

export const Columns: React.FunctionComponent<ColumnsProps> & {
  Column: typeof Column;
} = ({ breakpoint, centered, className, gapless, multiline, vcentered, ...rest }: ColumnsProps) => {
  const props = modifiers.clean(rest);
  return (
    <Element
      className={cn('columns', className, modifiers.getClassName(rest), {
        'is-centered': centered,
        'is-gapless': gapless,
        'is-multiline': multiline,
        'is-vcentered': vcentered,
        [`is-${breakpoint}`]: breakpoint
      })}
      {...props}
    />
  );
};

Columns.Column = Column;

Columns.defaultProps = {
  ...modifiers.defaultProps,
  centered: false,
  gapless: false,
  multiline: true
};
