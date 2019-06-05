import cn from 'classnames';
import React from 'react';
import { Breakpoints } from '../../constants';
import modifiers, { Modifiers } from '../../modifiers';
import { Element } from '../elements';

export * from './components';

type ColumnsProps = Partial<Modifiers> & {
  breakpoint?: Breakpoints;
  centered?: boolean;
  gapless?: boolean;
  multiline?: boolean;
};

export const Columns: React.FunctionComponent<ColumnsProps> = ({
  className,
  breakpoint,
  gapless,
  multiline,
  centered,
  ...props
}: ColumnsProps) => (
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

Columns.defaultProps = {
  ...modifiers.defaultProps,
  centered: false,
  gapless: false,
  multiline: true
};
