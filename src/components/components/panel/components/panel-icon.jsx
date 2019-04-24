import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../elements';

export const PanelIcon = ({ className, ...props }) => <Element {...props} className={cn('panel-icon', className)} />;

PanelIcon.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

PanelIcon.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'span'
};
