import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../modifiers';
import { Element } from '../../element';

export const CardContent = ({ className, ...props }) => (
  <Element {...props} className={cn('card-content', className)} />
);

CardContent.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

CardContent.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
