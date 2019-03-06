import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../../modifiers';
import { Element } from '../../../../element';

export const CardFooterItem = ({ className, ...props }) => (
  <Element {...props} className={cn('card-footer-item', className)} />
);

CardFooterItem.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

CardFooterItem.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
