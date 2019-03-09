import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../../../modifiers';
import { Element } from '../../../element';
import { CardFooterItem } from './components';

export const CardFooter = ({ className, ...props }) => <Element {...props} className={cn('card-footer', className)} />;

CardFooter.Item = CardFooterItem;

CardFooter.propTypes = {
  ...modifiers.propTypes,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

CardFooter.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
