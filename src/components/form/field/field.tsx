import cn from 'classnames';
import React from 'react';
import modifiers, { Modifiers } from '../../../modifiers';
import { Element } from '../../elements';
import { FieldBody, FieldLabel } from './components';

type FieldProps = Partial<Modifiers> & {
  align?: 'centered' | 'right';
  context?: 'addons' | 'group';
  multiline?: boolean;
  horizontal?: boolean;
};

export const Field: React.FunctionComponent<FieldProps> = ({
  className,
  align,
  multiline,
  horizontal,
  context,
  ...props
}: FieldProps) => {
  let ctx = '';
  if (context === 'addons') {
    ctx = 'has-addons';
  } else if (context === 'group') {
    ctx = 'is-grouped';
  }
  return (
    <Element
      {...props}
      className={cn('field', className, {
        [`${ctx}`]: ctx,
        [`${ctx}-${align}`]: ctx && align,
        [`${ctx}-multiline`]: ctx === 'is-grouped' && multiline,
        'is-horizontal': horizontal
      })}
    />
  );
};

(Field as any).Label = FieldLabel;
(Field as any).Body = FieldBody;

Field.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div',
  multiline: false,
  horizontal: false
};
