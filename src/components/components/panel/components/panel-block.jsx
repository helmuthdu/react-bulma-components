import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

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
  active: PropTypes.bool,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

PanelBlock.defaultProps = {
  ...modifiers.defaultProps,
  active: false,
  renderAs: 'div'
};
