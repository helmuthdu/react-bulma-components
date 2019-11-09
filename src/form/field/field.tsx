import clsx from 'clsx';
import * as React from 'react';
import { Element } from '../../elements';
import modifiers, { ElementModifier } from '../../modifiers';
import { FieldBody } from './field-body';
import { FieldLabel } from './field-label';

type FieldProps = ElementModifier & {
  align?: 'centered' | 'right';
  context?: 'addons' | 'group';
  multiline?: boolean;
  horizontal?: boolean;
};

export const Field: React.FunctionComponent<FieldProps> & {
  Body: typeof FieldBody;
  Label: typeof FieldLabel;
} = ({ className, align, multiline, horizontal, context, ...props }: FieldProps) => {
  let ctx = '';
  if (context === 'addons') {
    ctx = 'has-addons';
  } else if (context === 'group') {
    ctx = 'is-grouped';
  }

  return (
    <Element
      {...props}
      className={clsx('field', className, {
        [`${ctx}`]: ctx,
        [`${ctx}-${align}`]: ctx && align,
        [`${ctx}-multiline`]: ctx === 'is-grouped' && multiline,
        'is-horizontal': horizontal
      })}
    />
  );
};

Field.Body = FieldBody;
Field.Label = FieldLabel;

Field.defaultProps = {
  ...modifiers.defaultProps,
  multiline: false,
  horizontal: false
};
