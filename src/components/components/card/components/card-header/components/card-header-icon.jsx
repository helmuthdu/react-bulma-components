import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../../modifiers';
import { Element } from '../../../../../elements';

export const CardHeaderIcon = ({ className, ...props }) => (
  <Element {...props} className={cn('card-header-icon', className)} />
);

CardHeaderIcon.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

CardHeaderIcon.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
