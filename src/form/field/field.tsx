import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type FieldProps = ElementModifier & {
  align?: 'centered' | 'right';
  context?: 'addons' | 'group';
  multiline?: boolean;
  horizontal?: boolean;
};

export const Field = React.forwardRef<HTMLElement, FieldProps>(
  ({ className, align, multiline, horizontal, context, ...props }, ref) => {
    let ctx = '';

    if (context === 'addons') {
      ctx = 'has-addons';
    } else if (context === 'group') {
      ctx = 'is-grouped';
    }

    return (
      <Element
        ref={ref}
        {...props}
        className={clsx('field', className, {
          [`${ctx}`]: ctx,
          [`${ctx}-${align}`]: ctx && align,
          [`${ctx}-multiline`]: ctx === 'is-grouped' && multiline,
          'is-horizontal': horizontal
        })}
      />
    );
  }
);

Field.defaultProps = {
  ...modifiers.defaultProps,
  multiline: false,
  horizontal: false
};
