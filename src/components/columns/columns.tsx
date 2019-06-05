import cn from 'classnames';
import React from 'react';
import { Breakpoints } from '../../constants';
import modifiers, { ElementModifier } from '../../modifiers';
import { Element } from '../elements';
import { Column } from './column';

type ColumnsProps = Partial<Omit<React.ComponentProps<'div'>, 'unselectable'>> &
  ElementModifier & {
    breakpoint?: Breakpoints;
    centered?: boolean;
    gapless?: boolean;
    multiline?: boolean;
  };

export const Columns: React.FunctionComponent<ColumnsProps> & {
  Column: typeof Column;
} = ({ className, breakpoint, gapless, multiline, centered, ...props }: ColumnsProps) => (
  <Element
    {...props}
    className={cn(className, 'columns', {
      'is-centered': centered,
      'is-gapless': gapless,
      'is-multiline': multiline,
      [`is-${breakpoint}`]: breakpoint
    })}
  />
);

Columns.Column = Column;

Columns.defaultProps = {
  ...modifiers.defaultProps,
  centered: false,
  gapless: false,
  multiline: true
};
