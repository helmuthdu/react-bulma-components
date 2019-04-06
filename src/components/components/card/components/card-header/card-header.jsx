import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../modifiers';
import { Element } from '../../../../layout/element';
import { CardHeaderIcon, CardHeaderTitle } from './components';

export const CardHeader = ({ className, ...props }) => <Element {...props} className={cn('card-header', className)} />;

CardHeader.Title = CardHeaderTitle;
CardHeader.Icon = CardHeaderIcon;

CardHeader.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

CardHeader.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
