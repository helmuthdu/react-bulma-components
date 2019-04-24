import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

export const PanelHeader = ({ className, ...props }) => (
  <Element {...props} className={cn('panel-heading', className)} />
);

PanelHeader.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

PanelHeader.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
