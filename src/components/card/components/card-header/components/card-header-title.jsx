import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../modifiers';
import { Element } from '../../../../element';

export const CardHeaderTitle = ({ className, ...props }) => (
  <Element {...props} className={cn('card-header-title', className)} />
);

CardHeaderTitle.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

CardHeaderTitle.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
