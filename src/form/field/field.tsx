import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';

type FieldProps = Omit<React.ComponentPropsWithRef<'div'>, 'unselectable'> &
  ElementModifier & {
    align?: 'centered' | 'right';
    context?: 'addons' | 'group';
    floatingLabel?: boolean;
    floatingInLabel?: boolean;
    multiline?: boolean;
    horizontal?: boolean;
  };

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, align, floatingLabel, floatingInLabel, multiline, horizontal, context, ...props }, ref) => {
    let ctx = '';

    if (context === 'addons') {
      ctx = 'has-addons';
    } else if (context === 'group') {
      ctx = 'is-grouped';
    }

    return (
      <Element
        ref={ref}
        className={clsx(
          'field',
          {
            [`${ctx}`]: ctx,
            [`${ctx}-${align}`]: ctx && align,
            [`${ctx}-multiline`]: ctx === 'is-grouped' && multiline,
            'is-floating-label': floatingLabel,
            'is-floating-in-label': floatingInLabel,
            'is-horizontal': horizontal
          },
          className
        )}
        {...props}
      />
    );
  }
);

Field.defaultProps = {
  ...modifiers.defaultProps,
  multiline: false,
  horizontal: false
};

Field.displayName = 'Field';
