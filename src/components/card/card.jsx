import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import modifiers from '../../modifiers';
import { Element } from '../element';
import { CardContent, CardFooter, CardHeader, CardImage } from './components';

export const Card = ({ className, children, ...props }) => (
  <Element className={cn('card', className)} {...props}>
    {children}
  </Element>
);

Card.Content = CardContent;
Card.Footer = CardFooter;
Card.Header = CardHeader;
Card.Image = CardImage;

Card.propTypes = {
  ...modifiers.propTypes,
  children: PropTypes.node,
  className: PropTypes.string,
  renderAs: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  style: PropTypes.object
};

Card.defaultProps = {
  ...modifiers.defaultProps,
  renderAs: 'div'
};
