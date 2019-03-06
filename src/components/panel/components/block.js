import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const PanelBlock = ({ className, active, ...props }) => (
  <Element
    {...props}
    className={cn('panel-block', className, {
      'is-active': active
    })}
  />
);

PanelBlock.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  active: PropTypes.bool
};

PanelBlock.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div',
  active: false
};
