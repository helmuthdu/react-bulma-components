import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../layout/element';
import { FieldBody, FieldLabel } from './components';

export const Field = ({ className, align, multiline, horizontal, context, ...props }) => {
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

Field.Label = FieldLabel;
Field.Body = FieldBody;

Field.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  align: PropTypes.oneOf(['centered', 'right']),
  context: PropTypes.oneOf(['addons', 'group']),
  multiline: PropTypes.bool,
  horizontal: PropTypes.bool
};

Field.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div',
  multiline: false,
  horizontal: false
};
